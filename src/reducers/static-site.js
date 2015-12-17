// data
const TITLE = 'Aqua kine sports';
const intro= `Aqua kiné sport est un cabinet de kinésithérapie situé à Ronchin.
Ce centre est né de l'ambition de proposer un lieu de rééducation adapté à la prise en charge des sportifs de haut niveau et de mettre ce matériel et ces compétences à la disposition du plus grand nombre.

Avec une simple ordonnance médicale, vous avez donc accès à une rééducation optimale.
Notre secrétaire  vous accueille du lundi au vendredi de 8h30 à 12h30 et de 14h15 à 17h15, (14h à 16h le mercredi)
`
import teamData from '../data/team';
import cabinetData from '../data/cabinet';
import presentationData from '../data/presentation';

export default function staticSiteReducer(state={}, action){
    return {title: TITLE, team: teamData, cabinet: cabinetData, presentation: presentationData, intro};
}
