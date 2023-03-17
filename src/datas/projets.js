import food from '../assets/web-component/ohmyfood.jpg'
import panthere from '../assets/web-component/la panthère.jpg'
import kanap from '../assets/web-component/kanap.jpg'
import hot from '../assets/web-component/hot-takes.jpg'
import kasa from '../assets/web-component/kasa.jpg'

const projets = [
    {
        id: '1abc',
        name: 'ohmyfood',
        cover: food,
        alt: 'ohmyfood reservation restaurant',
        comment:`Dynamisez une page web avec des animations CSS, SASS.
        L'objectif est de développer un site 100% mobile qui répertorie les menus de restaurants gastronomiques.
        En plus des systèmes classiques de réservation, les clients pourront composer le menu de leur repas pour que les plats soient prêts à leur arrivée.
        Finis les temps d'attente au restaurant !`,
        src: 'https://kabuya-sina.github.io/KABUYA/'
    },
        {
        id: '2abc',
        name: 'la panthère',
        cover: panthere,
        alt: 'refonte site et augmention de perfomence',
        comment:`Optimisez un site web existant. Pour cette mission l'entreprise souhait que son référencement  soit amélioré.
        Analyse de l’état actuel de SEO du site fourni: Indiquez les parties du site qui ne sont pas optimisées (SEO & mise à jour accessibilité).
        Amélioration du SEO du site: Il faudra ensuite optimiser le site en appliquant tes 10 recommandations (contenu et code source)
        Comparaison des résultats: La vitesse de chargement des pages du site avant SEO et après`,
        src: 'https://kabuya-sina.github.io/P4---La-Panth-re/'
    },
        {
        id: '3abc',
        name: 'kanap',
        cover: kanap,
        alt: 'e-commerce, intégration des éléments dynamiques ',
        comment:`Construisez un site e-commerce en JavaScript.
        Kanap est une marque de canapés qui vend ses produits depuis sa boutique exclusivement.
        Aujourd’hui, celle-ci souhaiterait avoir une plateforme de e-commerce en plus de sa boutique physique pour vendre ses produits sur Internet.`,
        src: 'https://github.com/KABUYA-SINA/kanap'
    },
        {
        id: '4abc',
        name: 'Piiquante',
        cover: hot,
        alt: "partage d'avis piment ",
        comment:`Construisez une API sécurisée pour une application d'avis gastronomiques.
        Piiquante souhaite développer une application web de critique des sauces piquantes appelée « Hot Takes ».
        A terme transformer l'application d'évaluation en une boutique en ligne.
        La première version soit une « galerie de sauces » permettant aux utilisateurs de télécharger leurs sauces piquantes préférées et de liker ou disliker les sauces que d'autres partagent`,
        src: 'https://github.com/KABUYA-SINA/Piiquante-'
    },
        {
        id: '5abc',
        name: 'kasa',
        cover: kasa,
        alt: 'agence immobilière',
        comment: `Création d'une application web de location immobilière avec React.
        Le site de Kasa a été codé il y a maintenant plus de 10 ans en ASP.NET avec un code legacy important.
        la CTO a donc lancé une refonte totale pour passer à une stack complète, en JavaScript avec NodeJS côté back-end et React côté front-end`,
        src: 'https://github.com/KABUYA-SINA/Kasa'
    }
]

export default projets;