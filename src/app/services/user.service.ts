import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
//import { MongoClient } from 'mongodb'; // MongoDB driver

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private hardcodedUsers = [
    {
      name: 'John', 
      username: 'john',
      email: "johnleninortiz@gmail.com",
      github: "github.com/rent-a-human",
      mobile: "+57 302 568 8681",
      location: "Colombia",
      presentation: [
        { field: 'ImageURL', value: 'https://avatars.githubusercontent.com/u/20101141?v=4' },
        { field: 'Name', value: 'John Lenin Ortiz Gamba' },
        { field: 'Profession', value: `Software Developer - Development Team Leader. - Bachelor of Science in Mechanical Engineering` },
        { field: 'Presentation', value: "A highly experienced Software Developer with a proven track record in leading development teams and delivering robust, scalable solutions. Proficient in a wide range of frontend technologies, including Angular, React, and Svelte, as well as backend frameworks such as Node.js and Java. Passionate about utilizing cutting-edge tools to solve complex problems and drive innovation, with expertise in full-stack development and a solid foundation in mechanical engineering." }
      ],
      templateSettings: [
        { field: 'BackgroundURL', value: 'https://www.pikpng.com/pngl/b/45-456227_transparent-black-border-border-clipart-education-black-and.png' }
      ],
      workExperiences: [[
        { field: 'CompanyLogoUrl', value: 'https://avatars.githubusercontent.com/u/6602522?s=200&v=4' },
        { field: 'CompanyName', value: 'IGM Technology' },
        { field: 'Period', value: 'Sep 2021 - Present' },
        { field: 'Position', value: 'Development Team Leader' },
        { field: 'Achievements', value: 'Project: Gravity: Cloud Based Financial Close Management System. Spearheaded the migration of a legacy AngularJS application to Angular 14, resulting in significant performance improvements and a more refined user experience.Led the upgrade of Google Add-ons from AngularJS to Svelte, delivering optimized and modernized codebases.Developed full-stack custom module implementations, ensuring seamless integration between Angular and Java components.' }
      ],
      [
        { field: 'CompanyLogoUrl', value: 'https://avatars.githubusercontent.com/u/83523063?v=4' },
        { field: 'CompanyName', value: 'Olimpia SAS - MiFirma' },
        { field: 'Period', value: 'Feb 2021 - Sep 2021' },
        { field: 'Position', value: 'Frontend Developer' },
        { field: 'Achievements', value: 'Designed and built the MiFirma Office Add-in using Nodejs, enhancing document signing processes through seamless Microsoft Office integration.' }
      ],
      [
        { field: 'CompanyLogoUrl', value: 'assets/icons/slabcode.svg' },
        { field: 'CompanyName', value: 'Slabcode SAS' },
        { field: 'Period', value: 'Feb 2021 - Present' },
        { field: 'Position', value: 'Software Developer' },
        { field: 'Achievements', value: 'Developed responsive, intuitive web applications using Angular, React Native, and Svelte, with a focus on modern design patterns and user experiences.' }
      ],
      [
        { field: 'CompanyLogoUrl', value: 'assets/img/tera-logo.jpeg' },
        { field: 'CompanyName', value: 'IngeProyectos TERA' },
        { field: 'Period', value: 'Sep 2016 - Jan 2021' },
        { field: 'Position', value: 'Development Engineer' },
        { field: 'Achievements', value: 'Led the design and development of mechanical systems, including CNC machines and mechanical ventilators. Applied CAD & CAM tools for manufacturing and 3D modeling, with a focus on stress analysis through finite element simulations. Created landing pages and automated workflows using PHP, MySQL, and Excel macros.' }
      ],
      [
        { field: 'CompanyLogoUrl', value: 'assets/img/freelance.png' },
        { field: 'CompanyName', value: 'Freelance' },
        { field: 'Period', value: 'Feb 2006 - Oct 2009' },
        { field: 'Position', value: 'Other' },
        { field: 'Achievements', value: 'Build and mantain PHP based websites. Build Wordpress & PrestaShop landing pages. Developed desktop data base systems using MS Access. Created some automations with macros in Excel-Vb' }
      ],
      ],
      academicExperiences: [
        [
          { field: 'InstitutionLogoUrl', value: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/USB_logo.svg/1920px-USB_logo.svg.png' },
          { field: 'InstitutionName', value: 'Universidad Simon Bolivar' },
          { field: 'Period', value: 'Sep 2010 - Jun 2016' },
          { field: 'DegreeAcquired', value: 'BS in Mechanical Engineering' },
          { field: 'Achievements', value: 'Design and manufacture of a parabolic solar tracking dish and its coupling with a Stirling engine to harness solar energy.' }
        ],
        [
          { field: 'InstitutionLogoUrl', value: 'https://iesantateresadejesus.edu.co/wp-content/uploads/2020/05/favicon.jpg' },
          { field: 'InstitutionName', value: 'IE Santa Teresa de Jesus - CASD' },
          { field: 'Period', value: 'Jan 2003 - Dec 2005' },
          { field: 'DegreeAcquired', value: 'IT Certificate' },
          { field: 'Achievements', value: 'HTML, CSS, JavaScript, Visual Basic, PHP, MySQL, MSOffice' }
        ]
      ],
      skills: [
        {
          name: "Frontend", type: 'score', content: [
            { name: "Angular", score: 90 },
            { name: "AngularJS", score: 80 },
            { name: "HTML", score: 95 },
            { name: "CSS", score: 95 },
            { name: "JavaScript", score: 90 },
            { name: "TypeScript", score: 90 },
            { name: "React", score: 80 },
            { name: "React Native", score: 90 },
            { name: "Svelte", score: 90 },

          ]
        },
        {
          name: "Backend", type: 'score', content: [
            { name: "NodeJS", score: 80 },
            { name: "C#-Vb.Net", score: 80 },
            { name: "Spring Boot - Java", score: 70 },
            { name: "PHP", score: 70 },
            { name: "C++", score: 70 },
            { name: "MySQL", score: 80 },
            { name: "Postgres", score: 75 },
            { name: "Mongo", score: 75 },
            { name: "Docker", score: 60 }
          ]
        },
        {
          name: "IDE's & Development Tools", type: 'image', content: [
            { name: "GIT", logoUrl: 'assets/icons/git.svg' },
            { name: "SolidWorks", logoUrl: 'assets/icons/sw.svg' },
            { name: "IntelliJ", logoUrl: 'assets/icons/intellij.svg' },
            { name: "VSCode", logoUrl: 'assets/icons/vscode.svg' },
            { name: "Autodesk", logoUrl: 'assets/icons/inventor.svg' },
            { name: "Photoshop", logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg' },
            { name: "Figma", logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' },
            { name: "JIRA", logoUrl: 'assets/icons/jira.svg' },
            { name: "Proteus", logoUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Proteus_Design_Suite_Atom_Logo.png/172px-Proteus_Design_Suite_Atom_Logo.png' },
            { name: "Arduino", logoUrl: 'assets/icons/arduino.svg' },
            { name: "Raspberry", logoUrl: 'assets/icons/raspberry.png' },
            { name: "Blender", logoUrl: 'assets/icons/blender.svg' },
            { name: "Docker", logoUrl: 'https://avatars.githubusercontent.com/u/5429470?s=200&v=4'},
            { name: "Ruby on Rails", logoUrl: 'https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/ruby-on-rails-512.png'},
            { name: "CKEditor", logoUrl: 'https://cdn.worldvectorlogo.com/logos/ckeditor-2.svg'},
            { name: "DevExtreme", logoUrl: 'https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_a57b152e38712ef08473c51e9cce49c8/devexpress.png'},
            
          ]
        },
        {
          name: "Interests", type: 'image', content: [
            { name: "Nasa", logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg' },
            { name: "SpaceX", logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/36/SpaceX-Logo-Xonly.svg' },
            { name: "AI", logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg' },
            { name: "Department of Energy DOE", logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Seal_of_the_United_States_Department_of_Energy.svg' },
          ]
        },
        {
          name: "Languages", type: 'score', content: [
            { name: "Spanish", score: 99 },
            { name: "English", score: 90 }
          ]
        },
      ]
    },
    {
      name: 'Gladys', 
      username: 'doctoragarreffa',
      email: "doctoragarreffa@gmail.com",
      github: "",
      mobile: "+57 3155655259",
      location: "Colombia",
      presentation: [
        { field: 'ImageURL', value: '/assets/img/doctora-yaya.jpeg' },
        { field: 'Name', value: 'Gladys Titina Garreffa Barbato' },
        { field: 'Profession', value: `Médico, salud bioemocional` },
        { field: 'Presentation', value: "Médico general, con estudios y diplomados en salud mental y emocional. Guío a los consultantes a mejorar su salud mental y emocional brindándoles herramientas para superar el estrés por el que estén atravesando, así como las vivencias pasadas que estén limitando su presente y futuro. Gestión del estrés y promoción del bienestar personal y profesional" }
      ],
      templateSettings: [
        { field: 'BackgroundURL', value: 'https://i.pinimg.com/736x/88/7c/90/887c905e4c879c901a5ed7a7f01218ae.jpg' }
      ],
      workExperiences: [[
        { field: 'CompanyLogoUrl', value: 'https://static.wixstatic.com/media/14f752_0a7918f26d3441a4b06a054026d911c7~mv2.png/v1/crop/x_340,y_0,w_320,h_225,q_85,enc_avif,quality_auto/14f752_0a7918f26d3441a4b06a054026d911c7~mv2.png' },
        { field: 'CompanyName', value: 'Centro de salud Pronto Socorro, nivel II' },
        { field: 'Period', value: 'Julio 2019 - Julio 2020' },
        { field: 'Position', value: 'Médico Rural' },
        { field: 'Achievements', value: 'Primera linea de atención a pacientes con diferentes patologias/motivos de consulta' }
      ],
      [
        { field: 'CompanyLogoUrl', value: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxTQnLtYoNYUBJNOXbdBlVgNXDBn7QoTUSUQ&s' },
        { field: 'CompanyName', value: 'CAME-IPS Piedecuesta' },
        { field: 'Period', value: 'Enero 2023 - Mayo 2023' },
        { field: 'Position', value: 'Médico General' },
        { field: 'Achievements', value: 'Consultas de medicina general, con énfasis en examen osteomuscular.' }
      ],
      [
        { field: 'CompanyLogoUrl', value: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXwFYSDlEeRxT-IlucK5SEXMfo0_8OtFxy2g&s' },
        { field: 'CompanyName', value: 'Consultas de salud bioemocional' },
        { field: 'Period', value: 'Mayo 2024 - Presente' },
        { field: 'Position', value: 'Médico en salud bioemocional' },
        { field: 'Achievements', value: 'Consultas particulares de salud física, mental y emocional.' }
      ]
      ],
      academicExperiences: [
        [
          { field: 'InstitutionLogoUrl', value: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/UC_logo.png/180px-UC_logo.png' },
          { field: 'InstitutionName', value: 'Universidad de Carabobo' },
          { field: 'Period', value: 'Enero 2008 - Febrero 2017' },
          { field: 'DegreeAcquired', value: 'Médico Cirujano' },
          { field: 'Achievements', value: 'Tesis de Grado: Violencia obstétrica en pacientes atendidas en el Hospital José María Benitez.' }
        ],
        [
          { field: 'InstitutionLogoUrl', value: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/UC_logo.png/180px-UC_logo.png' },
          { field: 'InstitutionName', value: 'Universidad de Carabobo' },
          { field: 'Period', value: 'Septiembre - Noviembre 2019 (200h)' },
          { field: 'DegreeAcquired', value: 'Diplomado en estética facial y corporal' },
          { field: 'Achievements', value: 'Diplomado en estética facial y corporal' }
        ],
        [
          { field: 'InstitutionLogoUrl', value: 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2153165026/settings_images/da06afd-251-21c-3acc-fafda36c7ef_dd5ca7b7-7d3c-4a18-914c-5711c0ba7223.png' },
          { field: 'InstitutionName', value: 'Cuerpo Mente Alma University' },
          { field: 'Period', value: 'Octubre 2023 - Febrero 2024' },
          { field: 'DegreeAcquired', value: 'Diplomado en biodescodificacion y salud bioemocional' },
          { field: 'Achievements', value: 'Diplomado en biodescodificacion y salud bioemocional' }
        ],
        [
          { field: 'InstitutionLogoUrl', value: 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2153165026/settings_images/da06afd-251-21c-3acc-fafda36c7ef_dd5ca7b7-7d3c-4a18-914c-5711c0ba7223.png' },
          { field: 'InstitutionName', value: 'Cuerpo Mente Alma University' },
          { field: 'Period', value: 'Octubre 2024 - Presente' },
          { field: 'DegreeAcquired', value: 'Diplomado en liberación emocional profunda y coaching de vida' },
          { field: 'Achievements', value: 'Diplomado en liberación emocional profunda y coaching de vida' }
        ]
      ],
      skills: [
        {
          name: "Interests", type: 'image', content: [
            { name: "Salud Mental", logoUrl: 'https://cdn-icons-png.flaticon.com/512/3998/3998035.png' },
            { name: "Bienestar Emocional", logoUrl: 'https://img.freepik.com/vector-gratis/diseno-inteligencia-emocional_24877-81668.jpg' },
            { name: "Mente, Cuerpo y Alma", logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZngaF5i9Cz4CC6KedpSKjeljtKfEOEei9hw&s' }
          ]
        },
        {
          name: "Languages", type: 'score', content: [
            { name: "Español", score: 99 },
            { name: "Ingles", score: 70 }
          ]
        },
      ]
    },
    {
      name: 'Emily Bernal', 
      username: 'emily',
      email: "emilybernal@gmail.com",
      github: "github.com/emily-bernal",
      mobile: "+57 301 6826788",
      location: "Colombia",
      presentation: [
        { field: 'ImageURL', value: 'assets/img/profile-2.jpg' },
        { field: 'Name', value: 'Emily Bernal' },
        { field: 'Profession', value: `UX/UI Designer - Plastic Artist` },
        { field: 'Presentation', value: "A versatile UX/UI designer and plastic artist with a strong background in creating visually compelling and user-centric designs. Skilled in crafting intuitive interfaces, developing impactful branding solutions, and integrating artistic expression into digital and physical mediums. Proficient in tools such as Figma, Adobe Creative Suite, and Procreate, with a deep understanding of design principles and human-centered design. Passionate about merging creativity and functionality to deliver engaging experiences and inspire through artistic innovation." }
      ],
      templateSettings: [
        { field: 'BackgroundURL', value: 'https://i.pinimg.com/736x/88/7c/90/887c905e4c879c901a5ed7a7f01218ae.jpg' }
      ],
      workExperiences: [
        [
          { field: 'CompanyLogoUrl', value: 'assets/icons/slabcode.svg' },
          { field: 'CompanyName', value: 'Slabcode SAS' },
          { field: 'Period', value: 'Sept 2024 - Present' },
          { field: 'Position', value: 'Junior UX/UI' },
          { field: 'Achievements', value: 'Developed responsive, intuitive web applications' }
        ],
      ],
      academicExperiences: [
        [
          { field: 'InstitutionLogoUrl', value: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/USB_logo.svg/1920px-USB_logo.svg.png' },
          { field: 'InstitutionName', value: 'Corporación Universitaria Empresarial Alexander von Humboldt ' },
          { field: 'Period', value: 'Sep 2019 - Jun 2024' },
          { field: 'DegreeAcquired', value: 'Plastic Artist' },
          { field: 'Achievements', value: 'Graduated' }
        ],
        [
          { field: 'InstitutionLogoUrl', value: 'https://iesantateresadejesus.edu.co/wp-content/uploads/2020/05/favicon.jpg' },
          { field: 'InstitutionName', value: 'IE Santa Teresa de Jesus - CASD' },
          { field: 'Period', value: 'Jan 2003 - Dec 2005' },
          { field: 'DegreeAcquired', value: 'IT Certificate' },
          { field: 'Achievements', value: 'HTML, CSS, JavaScript, Visual Basic, PHP, MySQL, MSOffice' }
        ]
      ],
      skills: [
        {
          name: "Design Tools",
          type: "score",
          content: [
            { name: "Figma", "score": 95 },
            { name: "Adobe Photoshop", "score": 90 },
            { name: "Adobe Illustrator", "score": 85 },
            { name: "Adobe XD", "score": 80 },
            { name: "Sketch", "score": 75 },
            { name: "Procreate", "score": 90 },
            { name: "Blender", "score": 70 }
          ]
        },
        {
          name: "UI/UX Design",
          type: "score",
          content: [
            { name: "Wireframing", "score": 95 },
            { name: "Prototyping", "score": 90 },
            { name: "Interaction Design", "score": 85 },
            { name: "Responsive Design", "score": 90 },
            { name: "Accessibility", "score": 85 },
            { name: "User Research", "score": 80 }
          ]
        },
        {
          name: "Artistic Skills",
          type: "score",
          content: [
            { name: "Drawing & Sketching", "score": 95 },
            { name: "Painting", "score": 90 },
            { name: "Sculpture", "score": 80 },
            { name: "3D Modeling", "score": 75 },
            { name: "Mixed Media Art", "score": 85 }
          ]
        },
        {
          name: "Design & Collaboration Tools",
          type: "image",
          content: [
            { name: "Figma", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
            { name: "Adobe Photoshop", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" },
            { name: "Adobe Illustrator", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg" },
            { name: "Adobe XD", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg" },
            { name: "Blender", logoUrl: "assets/icons/blender.svg" },
            { name: "Procreate", logoUrl: "https://procreate.art/procreate-apple-pencil-icon" },
            { name: "Trello", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/76/Trello_logo.svg" },
            { name: "Miro", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Miro-logo.png" },
            { name: "Slack", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg" },
            { name: "JIRA", logoUrl: "assets/icons/jira.svg" }
          ]
        },
        {
          name: "Interests",
          type: "image",
          content: [
            { name: "Graphic Design", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Flat_design.svg" },
            { name: "Fine Arts", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Art_palette_icon.svg" },
            { name: "Photography", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/8/88/Camera_icon.svg" },
            { name: "Architecture", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/29/Architect_icon.svg" },
            { name: "Typography", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Typography_T_icon.svg" },
            { name: "Motion Design", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/6/63/Play_video_icon.svg" }
          ]
        },        
        {
          name: "Languages", type: 'score', content: [
            { name: "Spanish", score: 95 },
            { name: "English", score: 80 }
          ]
        },
      ]
    },
    { name: 'Jane', username: 'jane', age: 29, location: 'USA' },
    { name: 'Luis', username: 'luis', age: 41, location: 'Spain' },
  ];

  private mongoUri = 'mongodb://localhost/gravity-193';

  constructor() {}

  getUsers(): Observable<any[]> {
    // Uncomment this block to use MongoDB instead of hardcoded data
    /*
    return new Observable(observer => {
      MongoClient.connect(this.mongoUri, (err, client) => {
        if (err) {
          console.error('Error connecting to MongoDB', err);
          observer.error(err);
          return;
        }
        const db = client.db('gravity-193');
        db.collection('users')
          .find({})
          .toArray((error, data) => {
            if (error) {
              observer.error(error);
            } else {
              observer.next(data);
            }
            client.close();
          });
      });
    });
    */
    return of(this.hardcodedUsers);
  }

  getUserByusername(username: string): Observable<any> {
    return of(this.hardcodedUsers.find(user => user.username === username));
  }
}
