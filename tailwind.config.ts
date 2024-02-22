import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7FCFFC',
        lightGray: '#DBDBDB',
        error: '#DC2626',
        charcoalGray: '#2C2C2C',
        steelGray: '#7b7b7b ',
        inkBlue: '#161823',
        whisperGray: '#F6F6F6 ',
        mediumGray: '#7A7A7A ',
        rangoonGreen: '#1C1C1C',
        silverChalice: '#ADADAD',
        iridium: '#3D3D3D',
        cottonSeed: '#C5BCBC',
        monsoon: '#888585',
        artyClickOceanGreen: '#00FF85',
      },
      backgroundImage: {
        header: 'linear-gradient(rgba(0, 0, 0, 0.24), rgba(0, 0, 0, 0))',
      },
      spacing: {
        1.25: '5px',
        6.5: '26px',
        15: '60px',
      },
      width: {
        12.5: '50px',
      },
      borderRadius: {
        layout: '5px',
        2.5: '10px',
        5: '20px',
      },
      fontSize: {
        5.5: '22px',
      },
      boxShadow: {
        top: '0 -4px 6px -1px rgba(0, 0, 0, 0.05), 0 -2px 4px -1px rgba(0, 0, 0, 0.03)',
      },
    },
  },
  plugins: [],
}
export default config
