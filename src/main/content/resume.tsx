import * as React from 'react';
import { Box, Typography, Link } from "@mui/material";

export default function Resume(screen: IScreenSize) {
    // const [gridSize, setGridSize] = React.useState("span 6");

    // React.useEffect(() => {
    //     let size = screen.isMobile ? "span 12": "span 6";
    //     setGridSize(size);
    // }, [screen.isMobile]);

    const experiences = [
        {   
            id: 'netsuite-dev',
            dateRange: 'May 2022 - Current',
            position: 'SOFTWARE ENGINEER',
            company: 'Oracle Netsuite Philippines Corporation',
            desc: [
                'Improved Netsuite ERP System using Suitescript and Jasmine Testing Framework for unit test automation.',
                'Part of developing Netsuite Next ERP System using Oracle JavaScript Extension Toolkit(OJET) Framework.',
                'Design proposals for both backend and frontend design changes.',
                'Address customer\'s technical issues.'
            ]
        },
        {   
            id: 'magicsoft-dev',
            dateRange: 'January 2020 - May 2022',
            position: 'FULL-STACK WEB DEVELOPER',
            company: 'Magicsoft International Software Development and Services',
            desc: [
                'Developed and managed an international online e-learning platform using Bootstrap 5 , NextJS, Prisma, NodeJS, WebSocket and MySql.',
                'Developed an official website of this start-up company using Wordpress.',
                'Worked with project managers and consult clients to resolve technical issues and establish problem specifications and system designs.',
                'Analyze software usability and performance, suggesting changes to improve functionality and deliver important features on deployment.',
                'Delegated tasks and helped others to solve a particular problem.',
                'Designed a hiring posters, calling cards, company logo and created wireframes using Figma for the projects.'
            ]
        },
        {
            id: 'mint05-dev',
            dateRange: 'July 2019 - December 2019',
            position: 'WEB DESIGNER / FRONT-END DEVELOPER',
            company: 'Mint05-Infuturo, Inc.',
            desc: [
                'Enhanced HR portal site appearance.',
                'Designed future project gamified e-learning system.'
            ]
        },
    ];
    
    const schools = [
        {
            id: 'bsu',
            year: 2019,
            name: 'BENGUET STATE UNIVERSITY',
            degree: 'Bachelor of Science in Information Technology',
            awards: [
                'First place in Java Programming Competition during IT week (2018)',
                'Second place in C# Programming Competition during IT week (2018)',
                'Third place in Java Programming Competition during IT week (2017)',
                'Third place in Greenfoot Programming Competition during IT week (2016)'
            ]
        },
        {
            id: 'mnhs',
            year: 2014,
            name: 'MAGSAYSAY NATIONAL HIGH SCHOOL',
            awards: [
                'with Honors',
                'Artist of the Year',
            ]
        },
        {
            id: 'ltcs',
            year: 2014,
            name: 'LA TRINIDAD CENTRAL SCHOOL',
            awards: [
                'with Honors'
            ]
        },
    ];

    const seminars = [
        {
            date: 'October 22, 2020',
            title: 'Introduction to Malware Threats',
            company: 'Trend Micro',
            link: './certificates/malware_threats.pdf'
        },
        {
            date: 'January 24, 2021',
            title: 'Introduction to Cybersecurity',
            company: 'Cisco Networking Academy',
            link: './certificates/intro_cybersecurity.pdf'
        }
    ];

    return(
        <>
            <Box gridColumn="span 12">
                <Typography variant='h2'>Work Experiences</Typography>
            </Box>
            { experiences.map(exp => (
                <>
                    <Box gridColumn={screen.isMobile ? "span 12":"span 3"}>
                        <i>{ exp.dateRange }</i>  
                    </Box>
                    <Box gridColumn={screen.isMobile ? "span 12":"span 9"}>
                        <Typography variant='h4' sx={{ color: 'primary.main' }}>{ exp.position }</Typography>
                        <strong><i>{ exp.company }</i></strong>
                        <ul>
                            { exp.desc.map( (did, i) => (
                                <li key={ exp.id+'-'+'list-'+i}>{ did }</li>
                            )) }
                        </ul>
                    </Box>
                </>
            )) }

            <Box gridColumn="span 12" sx={{ mt: 5 }}>
                <Typography variant='h2'>Education, Honors and Awards</Typography>
            </Box>
            { schools.map(school => (
                <>
                    <Box gridColumn={screen.isMobile ? "span 12":"span 3"}>
                        <i>{ school.year }</i>  
                    </Box>
                    <Box gridColumn={screen.isMobile ? "span 12":"span 9"}>
                        <Typography variant='h4' sx={{ color: 'primary.main' }}>{ school.name }</Typography>
                        <strong><i>{ school?.degree }</i></strong>
                        <ul>
                            { school.awards.map( (award, i) => (
                                <li key={ school.id+'-'+'list-'+i}>{ award }</li>
                            )) }
                        </ul>
                    </Box>
                </>
            )) }

            <Box gridColumn="span 12" sx={{ mt: 5 }}>
                <Typography variant='h2'>Seminars and Trainings Attended</Typography>
            </Box>
            { seminars.map(seminar => (
                <>
                    <Box gridColumn={screen.isMobile ? "span 12":"span 3"}>
                        <i>{ seminar.date }</i>  
                    </Box>
                    <Box gridColumn={screen.isMobile ? "span 12":"span 9"} sx={{ mb:2 }}>
                        <Link href={ seminar.link } target="_blank" rel="noopener"  >
                            <Typography variant='h4' sx={{ color: 'primary.main' }}>{ seminar.title }</Typography>
                        </Link>
                        
                        <strong><i>{ seminar.company }</i></strong>
                    </Box>
                </>
            )) }
            <Box gridColumn="span 12" sx={{ mt: 5 }}>
                <Link href="./cv_resume_NadiaTiwing_WebDev.pdf" target="_blank" rel="noopener"  >
                    <Typography variant='h6' sx={{ color: 'yellow' }}>Download Resume</Typography>
                </Link>
                
            </Box>
        </>
    );
}
