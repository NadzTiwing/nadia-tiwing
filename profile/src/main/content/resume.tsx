import { Box, Grid, Typography, Link } from "@mui/material";

export default function Resume() {
    const experiences = [
        {   
            id: 'netsuite-dev',
            dateRange: 'May 2022 - Current',
            position: 'SOFTWARE ENGINEER',
            company: 'Oracle Netsuite Philippines Corporation',
            desc: [
                'Maintaining and enhancing Netsuite ERP System using Suitescript and Jasmine for unit test automation.',
                'Part of developing Netsuite Next ERP System using Oracle JavaScript Extension Toolkit(OJET) Framework.',
                'Able to create design proposals for both backend and frontend design changes.'
            ]
        },
        {   
            id: 'magicsoft-dev',
            dateRange: 'January 2020 - May 2022',
            position: 'FULL-STACK WEB DEVELOPER',
            company: 'Magicsoft International Software Development and Services',
            desc: [
                'Part of creating, improving and developing an online learning platform using Bootstrap 5 , NextJS, Prisma, NodeJS, WebSocket and MySql.',
                'Responsible in creating the official website of this start-up companyusing Wordpress.',
                'Worked with project managers and consult clients to resolve technical issues and establish problem specifications and system designs.',
                'Analyze software usability and performance, suggesting changes to improve functionality or be able to deliver the important features on deploymentfor testing.',
                'Assigning tasks to juniors and helping my co-workers to solve a particular problem.',
                'Responsible in designing hiring posters, calling cards, company logo and creating wireframes using Figma for the projects.'
            ]
        },
        {
            id: 'mint05-dev',
            dateRange: 'July 2019 - December 2019',
            position: 'WEB DESIGNER / FRONT-END DEVELOPER',
            company: 'Mint05-Infuturo, Inc.',
            desc: [
                'Helped in designing their HR portal site.',
                'Responsible in doing the front-end design of the future project –a gamified e-learning system.'
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
            link: '/certificates/malware_threats.pdf'
        }
    ];

    return(
        <>
            <Box gridColumn="span 12">
                <Typography variant='h2'>Work Experiences</Typography>
            </Box>
            { experiences.map(exp => (
                <>
                    <Box gridColumn="span 3">
                        <i>{ exp.dateRange }</i>  
                    </Box>
                    <Box gridColumn="span 9">
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
                    <Box gridColumn="span 3">
                        <i>{ school.year }</i>  
                    </Box>
                    <Box gridColumn="span 9">
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
                    <Box gridColumn="span 3">
                        <i>{ seminar.date }</i>  
                    </Box>
                    <Box gridColumn="span 9">
                        <Link href={ seminar.link } target="_blank" rel="noopener"  >
                            <Typography variant='h4' sx={{ color: 'primary.main' }}>{ seminar.title }</Typography>
                        </Link>
                        
                        <strong><i>{ seminar.company }</i></strong>
                    </Box>
                </>
            )) }
        </>
    );
}
