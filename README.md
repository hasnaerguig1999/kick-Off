# kick-Off
KickOff est une application mobile développée avec React Native Expo, offrant une expérience immersive pour les passionnés de football. L'application permet aux utilisateurs de suivre facilement les matchs de football en temps réel, de rester informés sur les scores et d'explorer les statistiques détaillées des joueurs.

## Caractéristiques

- Voir les matches
- Ajouter des matchs au favouris
- filtrage les matches par ligue
- Afficher les détails du matche
- Voir les joeurs
- Afficher les détails du joeur
- recherche par joeur
  

## Les technologies

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.io/)
- [React Redux](https://react-redux.js.org/)
- [React Navigation](https://reactnavigation.org/)

##Installation

### Conditions préalables

- [Node.js](https://nodejs.org/en/)

### Pas

- Assurez-vous que Node.js est installé
- Cloner le dépôt
- ouvrir le terminal dans le répertoire du projet
- Exécutez npm i pour installer les dépendances
- Exécutez npx expo start pour démarrer l'application

### Dockérisation

- Assurez-vous que [Docker](https://www.docker.com/) est installé
- exécutez docker build -t [choisissez-un-nom-pour-votre-docker-image] . pour construire l'image docker, n'oubliez pas de mentionner un nom
- exécutez docker run -it -p 19000:19000 -p 19001:19001 -p 19002:19002 -p 8081:8081 [le-nom-de-votre-conteneur] pour exécuter le conteneur Docker

## Tests
exécuter npm test pour exécuter des tests
