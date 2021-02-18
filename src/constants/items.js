//images
import watch1 from '../assets/images/watch1.png';
import watch2 from '../assets/images/watch2.png';
import watch3 from '../assets/images/watch3.png';
import watch4 from '../assets/images/watch4.png';
import watch5 from '../assets/images/watch5.png';
import watch6 from '../assets/images/watch6.png';
import watch7 from '../assets/images/watch7.png';
import watch8 from '../assets/images/watch8.png';
import watch9 from '../assets/images/watch9.png';

import {nanoid} from "nanoid";

function createItem(
  id = nanoid(),
  name = 'Name',
  image = '',
  cost = 100,
  description = '',
  type = 'standard'
) {
  return {
    id,
    name,
    image,
    cost,
    description,
    type
  }
}

let items = [
  createItem('4Lxqa58bqq_', 'Relish', watch1, 50, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur cum nulla provident qui quo ratione repudiandae rerum voluptatum. Hic, saepe'),
  createItem('at5Afgtqp_', 'Redux RWS0106S', watch2, 70, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eaque ex iure modi natus, quaerat recusandae temporibus voluptates? Consequatur, natus nihil? At aut molestiae nulla ratione!'),
  createItem('y3dfgat5asfa', 'Samsung Galaxy Watch', watch3, 350, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus asperiores consequuntur distinctio laudantium molestias omnis sequi suscipit.', 'smart'),
  createItem('qatfasfa_10', 'Apple Watch Series 6', watch4, 430, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cupiditate, distinctio doloremque doloribus earum facilis illo magnam maxime, mollitia nam possimus quis ratione, repudiandae tempora voluptatum. At dignissimos repudiandae voluptate.', 'smart'),
  createItem('lasfgno46_', 'Piraso', watch5, 70, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam minima obcaecati quia voluptates'),
  createItem('baqfgha8', 'Apple Watch Series 3', watch6, 200, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias atque debitis dolorum ea, eaque eligendi eos facere ipsum itaque laborum maxime natus necessitatibus nesciunt, obcaecati provident repudiandae sapiente ullam!', 'smart'),
  createItem('mzatqtygd56', 'Casio G-Shock', watch7, 150, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cum cumque enim esse et non perferendis perspiciatis, placeat quam unde. Adipisci eaque eveniet neque officia soluta. Ab, at.', 'smart'),
  createItem('atqweqtgq_25', 'Timewear', watch8, 50, 'Lorem ipsum dolor sit amet, consectetur adipisicing.'),
  createItem('F22ragasq', 'Realme Watch S', watch9, 100, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, iste odio!', 'smart')
];

export default items;
