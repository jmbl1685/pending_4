angular.module('homeController', [])
    .controller('homeController', function ($scope, $http) {

        $scope.title = 'A cerca de mi'
        $scope.description = {
            item1: 'Desarrollador de Software con excelentes habilidades para trabajar en equipo y dispuesto a asumir responsabilidades y retos.',
            item2: 'Proactivo, adaptable a cualquier espacio con la capacidad de actuar acertadamente en situaciones bajo presión. Responsable y comprometido. Ingenioso y recursivo frente a la resolución de situaciones dentro del contexto laboral.',
            item3: 'Autodidacta y curioso por naturaleza, apasionado por todo lo relacionado a nuevas tecnologías.'
        }

        $scope.user = {
            name: 'Juan Manuel Batty Linero',
            avatar: '/images/jbatty_avatar.jpg',
            description: 'Desarrollador de Software'
        }

        $scope.skills = [
            {
                technology: 'CSharp',
                level: 'Avanzado',
                logo: 'http://cursdev.com/wp-content/uploads/2018/02/curso-online-gratis-programacion-csharp-cursdev.jpg'
            },
            {
                technology: 'ASP.NET',
                level: 'Avanzado',
                logo: 'http://5.imimg.com/data5/AM/TS/MY-8993019/asp-dot-net-services-500x500.png'
            },
            {
                technology: 'Javascript',
                level: 'Avanzado',
                logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/500px-Unofficial_JavaScript_logo_2.svg.png'
            },
            {
                technology: 'Node.js',
                level: 'Avanzado',
                logo: 'https://cdn-images-1.medium.com/max/500/1*Y6rAPTkjtiKOdRZlImjaIQ.png'
            },
            {
                technology: 'Angular.js',
                level: 'Intermedio',
                logo: 'https://cdn.auth0.com/blog/angular-auth-screencasts/angular-logo.png'
            },
            {
                technology: 'Angular',
                level: 'Intermedio',
                logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/500px-Angular_full_color_logo.svg.png'
            },
            {
                technology: 'React.js',
                level: 'Intermedio',
                logo: 'https://png2.kisspng.com/20180604/ioq/kisspng-react-javascript-angularjs-ionic-atom-5b154be6947457.3471941815281223426081.png'
            },
            {
                technology: 'Git',
                level: 'Intermedio',
                logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/500px-Git_icon.svg.png'
            },
            {
                technology: 'Microsoft Azure',
                level: 'Intermedio',
                logo: 'https://static1.squarespace.com/static/58078d9a579fb3aad487d3cc/t/58b3c8fa2e69cf75a41ab174/1488177406138/?format=500w'
            },
            {
                technology: 'MongoDB',
                level: 'Intermedio',
                logo: 'https://d22e4d61ky6061.cloudfront.net/sites/default/files/MongoDB_0_0.png'
            },
            {
                technology: 'Firebase',
                level: 'Intermedio',
                logo: 'https://www.joshmorony.com/wp-content/uploads/2016/11/firebase.png   '
            }             
        ]

    })

