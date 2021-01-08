import slider1 from './images/bathroom.jpg';
import slider2 from './images/construction1.jpg';
import slider3 from './images/noeproj1.jpg';
import slider4 from './images/noevalley2.jpg';

import service1 from './images/services1.jpg';
import service2 from './images/services2.png';
import service3 from './images/services3.png';
import service4 from './images/services4.png';

import noe1 from './images/noevalley1.jpg';
import noe2 from './images/noevalley3.jpg';
import noe3 from './images/noevalley4.jpg';
import noe4 from './images/noevalley5.jpg';

import ssf1 from './images/ssf1.jpg';
import ssf2 from './images/ssf2.jpg';
import ssf3 from './images/ssf3.jpg';
import ssf4 from './images/ssf4.jpg';
import ssf5 from './images/ssf5.png';

import noeTwo2 from './images/noeproj3.jpg';

import exterior1 from './images/exterior1.jpg';
import exterior2 from './images/exterior2.jpg';
import exterior3 from './images/exterior3.jpg';

export const servicesImages = [
  {
    src: service2,
    title: 'Home Remodeling',
    class: 'gallery__item--1',
  },
  {
    src: service1,
    title: 'Bathroom Remodeling',
    class: 'gallery__item--2',
  },
  {
    src: service3,
    title: 'Kitchen Remodeling',
    class: 'gallery__item--3',
  },
  {
    src: service4,
    title: 'New Construction',
    class: 'gallery__item--4',
  },
];

export const sliderImages = [
  {
    src: noe4,
    title: 'Home Renovation',
  },
  {
    src: slider1,
    title: 'Bathroom Renovation',
  },
  {
    src: noe1,
    title: 'Kitchen Renovation',
  },
  {
    src: slider2,
    title: 'New Construction & ADU',
  },
];

export const reviews = [
  {
    name: 'Clara Fuentes',
    review:
      'Brighter Bay Builders, Inc. is an amazing company with caring employees. They are all very knowledgeable and will design and execute exactly what you envision. Highly satisfied with our appartment.',
  },
  {
    name: 'Rosa Embart',
    review:
      'I am amazed not only at the beauty and quality of the work done by Brighter Bay Builders, Inc. but also by the degree of trust and confidence.',
  },
  {
    name: 'Patrick Phases',
    review:
      'I was very pleased with the work that was done on my house. Brighter Bay Builders, Inc. remodeled my house and turn it into my dream home. Despite the rainy weather he finished the job in a timely manner. I would recommend them to anyone.',
  },
];

export const aboutData = [
  {
    aboutHeader:
      'Based in San Francisco Bay Area, Bright Bay Builders, Inc. has earned a reputation as a high-quality, competitive firm that completes projects on time and within budget.',
    aboutSubheader:
      "With over 10 years of experience in the field, there is no project we can't handle. Here at Brighter Bay Builders, Inc., we take pride in our work and always pay attention to the minor details. We are committed to educating our customers on their projects' best choices and striving for a smooth and efficient experience. We only work with the best materials available and guarantee the best quality and your satisfaction. Our success comes from having core values that ensure customer's contentment with the results of the project. We believe in honesty, loyalty, integrity, and leadership. Let us work together to make your dream home a reality.",
    src: service2,
    alt: 'Living room',
  },
];

export const services = [
  {
    _id: 'appartment-renovation',
    name: 'Fully Apartment Renovation',
    image: slider4,
    information:
      "With 10 years of experience handling full apartment renovation projects, Brighter Bay Builders, Inc. has earned a reputation for delivering high-quality results according to our customers' specific needs. Our team is highly qualified, and we can proactively anticipate and overcome challenges with each project. Working with Brighter Bay Builders ,Inc., we help significantly eliminate large projects' stress and make sure we achieve the desired results. We are proud of the work we do and never take the smallest details for granted. Complete customer satisfaction is our highest priority!",
    informationList: [
      'We let our 5-star rating and reviews speak for us',
      'A free and highly accurate estimate',
      'Known for superior detailed work, with top artisan craft',
      'Highly versatile builders that can handle any architecture and interior design styles',
      'Proven to deliver on client’s visions',
      'Our services adjust to your needs and ideas, we can make it happen',
    ],
  },
  {
    _id: 'bathroom-remodeling',
    name: 'Bathroom Remodeling',
    image: slider1,
    information:
      'Whether you are looking to upgrade elements of an existing bathroom or completely revamp an entire bathroom layout and design, we have a team that can bring your vision to reality. We handle bathroom projects from start to finish for apartments, brownstones, and town-homes across San Francisco Bay Area. Our  expert builders can take even the most detailed work, and our craftsmanship is second to none. You’ll be proud to show off your luxurious bathroom! We are proud of the work we do and never take the smallest details for granted. Complete customer satisfaction is our highest priority.',
    informationList: [
      'Highly versatile Bathroom builders',
      "Proven to deliver to the client's expectation",
      'Full service, including dedicated project management team',
      'We will build work with you in every phase of the project',
    ],
  },
  {
    _id: 'kitchen-remodeling',
    name: 'Kitchen Remodeling',
    image: slider3,
    information:
      'We know that a kitchen can be as much of a work of art as it is a functional place to cook, eat, or entertain. What differentiates Brighter Bay Builders, Inc. is its ability to deliver a complete kitchen remodeling vision while consistently ensuring the small but artful details are not overlooked. We can handle kitchen projects from start to finish for apartments, brownstones, and town-homes across the Bay Area. Our highly qualified team takes pride in every cabinet, tile, countertop, sink, faucet, appliance, and light figure – our craftsmanship is highly regarded.',
    informationList: [
      'Top artisan workmanship, with expert custom cabinet millwork',
      'Our builders will make it a reality for you',
      'Start-to-finish full-service contractor',
      'No stress! We expertly navigate regulations in and around high-rise buildings',
    ],
  },
];

export const projects = [
  {
    _id: 'noe-residence',
    name: 'Noe Valley Residence 1',
    image: noe1,
    imagesList: [noe1, noe2, noe3, noe4],
  },
  {
    _id: 'noe-residence-2',
    name: 'Noe Valley Residence 2',
    image: slider3,
    imagesList: [noeTwo2, slider3],
  },
  {
    _id: 'new-construction',
    name: 'New Construction',
    image: ssf1,
    imagesList: [ssf5, ssf2, ssf3, ssf4],
  },
  {
    _id: 'exterior',
    name: 'Exterior Remodeling',
    image: exterior3,
    imagesList: [exterior1, exterior2, exterior3, exterior1],
  },
];
