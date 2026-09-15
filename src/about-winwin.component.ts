import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CarouselImage } from '../../components/image-carousel/image-carousel.component';

interface AboutPillar {
  id: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-about-winwin',
  templateUrl: './about-winwin.component.html',
  styleUrl: './about-winwin.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutWinwinComponent {
  protected readonly people = Array(64).fill(0);

  protected readonly pillars: readonly AboutPillar[] = [
    {
      id: 'proposito',
      title: 'Propósito',
      description:
        'Transformar las ideas en realidades, generando un ecosistema donde cada proyecto tenga la oportunidad de crecer con apoyo comunitario e inversión responsable.',
    },
    {
      id: 'mision',
      title: 'Misión',
      description:
        'Facilitar la conexión entre personas con ideas, comunidades y pequeñas o grandes inversionistas, ofreciendo herramientas seguras, accesibles y transparentes para financiar proyectos con impacto tangible.',
    },
    {
      id: 'vision',
      title: 'Visión',
      description:
        'Ser la plataforma líder en comunidad solidaria en Latinoamérica, reconocida por confianza, innovación y apoyo real a proyectos que generan valor social, cultural y económico.',
    },
  ];

  protected readonly images: readonly CarouselImage[] = [
    { src: 'assets/images/hero/about-taller.jpg.png', alt: 'Taller comunitario en marcha' },
    { src: 'assets/images/hero/about-comunidad.jpg.png', alt: 'Comunidad presentando su proyecto' },
    { src: 'assets/images/hero/about-equipo.jpg.png', alt: 'Equipo de WinWin Dream trabajando' },
  ];
}
