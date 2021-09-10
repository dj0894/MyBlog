const articles = [
    {
        name: 'learn-react',
        title: 'What is React?',
        content: [`React.js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. It’s used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components. React was first created by Jordan Walke, a software engineer working for Facebook. React first deployed on Facebook’s newsfeed in 2011 and on Instagram.com in 2012.`,
            `React allows developers to create large web applications that can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple. It works only on user interfaces in the application. This corresponds to the view in the MVC template. It can be used with a combination of other JavaScript libraries or frameworks, such as Angular JS in MVC.`,


        ]
    }, {
        name: 'learn-node',
        title: 'Guiding Principles of Rest',
        content: [
            `Guiding Principles of REST`,

            `Client–server– By separating the user interface concerns from the data storage concerns, we improve the portability of the user interface across multiple platforms and improve scalability by simplifying the server components.`,
            `Stateless – Each request from client to server must contain all of the information necessary to understand the request, and cannot take advantage of any stored context on the server. Session state is therefore kept entirely on the client.`,
            `Cacheable – Cache constraints require that the data within a response to a request be implicitly or explicitly labeled as cacheable or non-cacheable. If a response is cacheable, then a client cache is given the right to reuse that response data for later, equivalent requests.`,
            `Uniform interface – By applying the software engineering principle of generality to the component interface, the overall system architecture is simplified and the visibility of interactions is improved. In order to obtain a uniform interface, multiple architectural constraints are needed to guide the behavior of components. REST is defined by four interface constraints: identification of resources; manipulation of resources through representations; self-descriptive messages; and, hypermedia as the engine of application state.`,
            `Layered system – The layered system style allows an architecture to be composed of hierarchical layers by constraining component behavior such that each component cannot “see” beyond the immediate layer with which they are interacting.`,
            `Code on demand (optional) – REST allows client functionality to be extended by downloading and executing code in the form of applets or scripts. This simplifies clients by reducing the number of features required to be pre-implemented.     `,
            ,
        ]
    }, {
        name: 'my-thoughts-on-resumes',
        title: '10 things to keep in mind when writing resume',
        content: [
            `Don’t start your job search without giving due thought to your resume as a strong resume does wonders for your chances of making it to the interview stage. Additionally, it can work wonders for your job search in general. Here’s how to make sure yours ends up in the ‘yes’ tray.`,
            `1. Keep it brief - usually two pages maximum.`,
            `2. Avoid unnecessary personal detail such as age, religion, and sex.`,
            `3. Don’t write in the first person – start sentences with verbs.`,
            `4. List your career history in reverse chronological order. Don’t forget to include a short note to explain any gaps.`,
            `5. Use bullet points for achievements and responsibilities – include more detail on recent roles and less on older ones, unless they are particularly relevant to the job you are applying for.`,
            `6. List educational institutions and qualifications in reverse chronological order.`,
            `7. Include computer skills, language skills, and any relevant training.`,
            `8. Keep your hobbies and interest section short.`,
            `9. References can be provided on request – you don’t need to include their contact details on your resume.`,
            `10. Check for typos.Even if you think your resume is error- free, it’s worth asking a friend to read it through.`,

        ]
    },
];

export default articles;