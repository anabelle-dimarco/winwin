import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { ContactRequest, ContactStatus } from '../../models/contact.model';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);
  private readonly contactService = inject(ContactService);

  protected readonly status = signal<ContactStatus>('idle');
  protected readonly feedback = signal('');

  /** Muñecos decorativos bajo el titular. */
  protected readonly people = Array(7).fill(0);

  protected readonly form = this.fb.nonNullable.group({
    fullName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phoneCode: ['', Validators.pattern(/^\+?\d{1,4}$/)],
    phone: ['', Validators.pattern(/^[\d\s]{6,20}$/)],
    topic: ['', Validators.required],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  protected submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.status.set('sending');
    this.feedback.set('');

    const request: ContactRequest = this.form.getRawValue();

    this.contactService.submit(request).subscribe({
      next: (response) => {
        this.status.set(response.ok ? 'success' : 'error');
        this.feedback.set(response.message);
        if (response.ok) {
          this.form.reset();
        }
      },
      error: () => {
        this.status.set('error');
        this.feedback.set('No pudimos enviar tu mensaje. Intentá de nuevo en unos minutos.');
      },
    });
  }

  /** true cuando el campo es inválido y ya fue tocado por la persona. */
  protected showError(control: keyof ContactRequest): boolean {
    const field = this.form.controls[control];
    return field.invalid && (field.touched || field.dirty);
  }
}
