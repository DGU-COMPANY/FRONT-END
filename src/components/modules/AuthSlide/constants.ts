import model1_frame from '@/assets/auth/model1/frame.png'
import model1_person from '@/assets/auth/model1/person.png'
import model1_support1 from '@/assets/auth/model1/support_1.png'
import model1_support2 from '@/assets/auth/model1/support_2.png'

import model2_frame from '@/assets/auth/model2/frame.png'
import model2_person from '@/assets/auth/model2/person.png'
import model2_support1 from '@/assets/auth/model2/support_1.png'
import model2_support2 from '@/assets/auth/model2/support_2.png'

import model3_frame from '@/assets/auth/model3/frame.png'
import model3_person from '@/assets/auth/model3/person.png'
import model3_support1 from '@/assets/auth/model3/support_1.png'
import model3_support2 from '@/assets/auth/model3/support_2.png'

import model4_frame from '@/assets/auth/model4/frame.png'
import model4_person from '@/assets/auth/model4/person.png'
import model4_support1 from '@/assets/auth/model4/support_1.png'
import model4_support2 from '@/assets/auth/model4/support_2.png'

export const listSlideAuth = [
  {
    key: 1,
    title: 'Knowledge is power',
    subtitle: 'Empowering minds with knowledge leads to endless possibilities.',
    images: [
      {
        animation: 'animate-wiggle',
        width: 330,
        height: 285,
        src: model2_frame,
        alt: 'frame',
      },
      {
        animation: 'animate-spinLeft-Model2-earth',
        width: 65,
        height: 85,
        src: model2_support1,
        alt: 'earth',
      },
      {
        animation: 'animate-spinLeft-Model2-battery',
        width: 150,
        height: 154,
        src: model2_support2,
        alt: 'battery',
      },
      {
        animation: 'animate-slideToRightModel1',
        width: 350,
        height: 350,
        src: model2_person,
        alt: 'person',
      },
    ],
  },
  {
    key: 2,
    title: 'Creativity is key.',
    subtitle:
      'In a world of repetition, original thought unlocks unparalleled potential.',
    images: [
      {
        animation: 'animate-wiggle',
        width: 350,
        height: 285,
        src: model1_frame,
        alt: 'frame',
      },
      {
        animation: 'animate-spinLeft',
        width: 65,
        height: 85,
        src: model1_support1,
        alt: 'cup',
      },
      {
        animation: 'animate-spinRight',
        width: 150,
        height: 154,
        src: model1_support2,
        alt: 'book',
      },
      {
        animation: 'animate-slideToRightModel3',
        width: 350,
        height: 350,
        src: model1_person,
        alt: 'person',
      },
    ],
  },
  {
    key: 3,
    title: 'Change to grow.',
    subtitle:
      'Embracing evolution propels us forward, making stagnation a memory.',
    images: [
      {
        animation: 'animate-wiggleModel3',
        width: 350,
        height: 285,
        src: model3_frame,
        alt: 'frame',
      },
      {
        animation: 'animate-spinLeftModal3',
        width: 150,
        height: 85,
        src: model3_support1,
        alt: 'rainbow',
      },
      {
        animation: 'animate-spinLeftBottomModel3',
        width: 65,
        height: 85,
        src: model3_support2,
        alt: 'calender',
      },
      {
        animation: 'animate-slideToRightModel4',
        width: 350,
        height: 350,
        src: model3_person,
        alt: 'person',
      },
    ],
  },
  {
    key: 4,
    title: 'Learn, shine, rise.',
    subtitle:
      'Embrace new knowledge, illuminate your strengths, and ascend to greatness.',
    images: [
      {
        animation: 'animate-wiggleModel4',
        width: 350,
        height: 285,
        src: model4_frame,
        alt: 'frame',
      },
      {
        animation: 'animate-spinLeft2',
        width: 85,
        height: 85,
        src: model4_support1,
        alt: 'book',
      },
      {
        animation: 'animate-spinRight2',
        width: 150,
        height: 154,
        src: model4_support2,
        alt: 'laptop',
      },
      {
        animation: 'animate-slideToRightModel2',
        width: 350,
        height: 350,
        src: model4_person,
        alt: 'person',
      },
    ],
  },
]
