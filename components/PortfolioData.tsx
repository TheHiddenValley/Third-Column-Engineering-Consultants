import React from "react";

export type Project = {
  title: string;
  category: string;
  image: string;
};

const portfolioData: Project[] = [
    { title: 'Abdul Razak Villa', category: 'Villa', image: '/01-abdulrazak-01.jpg' },
    { title: 'Abdulla Bin Kuwair Villa', category: 'Villa', image: '/02-Abdulla-01.jpg' },
    { title: 'Geltec Pharmaceutical', category: 'pharmaceutical', image: '/01-geltec-01.jpg'},
    { title: 'Hotel Damascus', category: 'hotels', image: '/02-syria-01.jpg' },
    { title: 'Hotel Barsha, Dubai', category: 'hotels', image: '/03-dubai-01.jpg' },
    { title: 'Hotel Addis Ababa', category: 'hotels', image: '/05-Addis-Ababa-01.jpg' },
    { title: 'Residential Building UAQ', category: 'hotels', image: '/04-UAQ-01.jpg' },
    { title: 'Faiz Bin Kuwair Villa', category: 'villa', image: '/03-faiz-01.jpg' },
    { title: 'Nabil Bin Kuwair Villa', category: 'villa', image: '/04-nabil-01.jpg' },
    { title: 'Saramma Villa', category: 'villa', image: '/05-saramma-01.jpg' },
    // { title: 'Suwailm-01', category: 'villa', image: '/06-suwailm-01.jpg' },
    { title: 'Suwailm Al Suwaidi Villa', category: 'villa', image: '/07-suwailm-02.jpg' },
    // { title: 'Suwailm-03', category: 'villa', image: '/08-suwailm-03.jpg' },
    { title: 'Hotel Apartment Bur Dubai', category: 'hotels', image: '/01-G+3-Burdubai-01.jpg'},
    
    { title: 'Labour Camp, Muhaisnah', category: 'residential', image: '/03-labourcamp-01.jpg'},
    // { title: 'Mombasa-01', category: 'residential', image: '/04-mombasa-01.jpg'},
    // { title: 'Mombasa-02', category: 'residential', image: '/05-mombasa-02.jpg'},
    { title: 'Kilua Homes, Mombasa', category: 'residential', image: '/06-mombasa-03.jpg'},
    { title: 'Rainbow Towers, UAQ', category: 'residential', image: '/07-rainbow-01.jpg'},
    { title: 'Umm Al Quwain Shopping', category: 'commercial', image: '/02-UAQ-Shopping-01.jpg'},
    { title: 'Office, Jabal Ali', category: 'commercial', image: '/04-Jabal-Ali-Office-01.jpg'},
    { title: 'Showroom, Al Quoz', category: 'commercial', image: '/05-alquoz-showroom-01.jpg'},
    { title: 'Residential Tower, Dubai Marina', category: 'residential', image: '/02-G+60-01.jpg'},
    { title: 'Addis Twin Tower, Addis Ababa', category: 'residential', image: '/08-Addis-Twin-Tower-01.jpg'},
    { title: 'Commercial Tower, Dubai Marina', category: 'commercial', image: '/01-40-flr-tower.jpg'},
    
    // { title: 'Geltec-02', category: 'pharmaceutical', image: '/01-geltec-02.jpg'},
    { title: 'Wockhardt Pharmaceutical', category: 'pharmaceutical', image: '/03-wockhardt-01.jpg'},
    { title: 'Syrian Orthodox Church, Jabal Ali', category: 'religious', image: '/01-Chruch-01.jpg'},
    { title: 'Golf Academy, Izmir, Turkey', category: 'institutional', image: '/01-Golf academy-01.jpg'},
    { title: 'Buds Public School, Dubai', category: 'institutional', image: '/01-Buds-01.jpg'},
    { title: 'Barkawi Cold Storage', category: 'industrial', image: '/01-barkawi-01.jpg'},
    { title: 'Beacon International', category: 'industrial', image: '/02-beacon-01.jpg'},
    { title: 'Bristol, Dubai', category: 'industrial', image: '/04-bristol-01.jpg'},
    { title: 'Jainee Foods, Dubai', category: 'industrial', image: '/05-jainee-01.jpg'},
    { title: 'MNR Industries', category: 'industrial', image: '/06-MNR-01.jpg'},
    { title: 'Proscape Landscape', category: 'industrial', image: '/07-Proscape-01.jpg'},
    { title: 'Rehmat Ali Industries', category: 'industrial', image: '/09-Rehmatali-02.jpg'},
    { title: 'VAM Drilling, Dubai', category: 'industrial', image: '/10-VAM Drillingi-01.jpg'},
    { title: 'Comat, Dubai', category: 'industrial', image: '/12-comat-02.jpg'},
    { title: 'Sam Phoenix FZE', category: 'industrial', image: '/13-sam-01.jpg'},
    { title: 'Mixed Use Tower, Hergesia', category: 'hotels', image: '/01-Hergesia-01.jpg' },
    

    // Add more project data here
  ];
  
  export default portfolioData;
