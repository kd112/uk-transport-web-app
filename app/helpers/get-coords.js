import { helper } from '@ember/component/helper';

export function getCoords(params/*, hash*/) {
  // console.log(Leaflet)
  return `params:${params} \n Leaflet`;
}

export default helper(getCoords);
