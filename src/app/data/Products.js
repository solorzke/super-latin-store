//Images
import BossRevolution from '../images/boss.png';
import Payment from '../images/billing.png';
import AFEX from '../images/afex.png';
import MoneyOrder from '../images/moneyorder.png';
import Geomil from '../images/geomil.png';
import CashCheck from '../images/cashcheck.png';

//MEDICINE
import Medicine1 from '../images/medicine/1.png';
import Medicine2 from '../images/medicine/2.webp';
import Medicine3 from '../images/medicine/3.png';
import Medicine4 from '../images/medicine/4.png';
import Medicine5 from '../images/medicine/5.jpg';

//JEWELERY
import Jewels1 from '../images/jewelery/1.png';
import Jewels2 from '../images/jewelery/2.png';
import Jewels3 from '../images/jewelery/3.png';
import Jewels4 from '../images/jewelery/4.png';

//PERFUMES
import Perfume1 from '../images/perfumes/1.png';
import Perfume2 from '../images/perfumes/2.png';
import Perfume3 from '../images/perfumes/3.png';
import Perfume4 from '../images/perfumes/4.png';
import Perfume5 from '../images/perfumes/5.png';

//MASKS
import Mask1 from '../images/masks/1.png';
import Mask2 from '../images/masks/2.png';
import Mask3 from '../images/masks/3.png';
import Mask4 from '../images/masks/4.jpg';

//PHONES
import Phone1 from '../images/phones/1.png';
import Phone2 from '../images/phones/2.png';
import Phone3 from '../images/phones/3.png';
import Phone4 from '../images/phones/4.png';
import Phone5 from '../images/phones/5.png';

//ELECTRONICS
import Ele1 from '../images/electronics/1.png';
import Ele2 from '../images/electronics/2.png';
import Ele3 from '../images/electronics/3.png';
import Ele4 from '../images/electronics/4.png';

//HUMITAS
import Huma1 from '../images/humitas/1.png';

//APPAREL
import Apparel1 from '../images/apparel/1.png';
import Apparel2 from '../images/apparel/2.png';
import Apparel3 from '../images/apparel/3.png';

//MONEY
import Money1 from '../images/money/1.jpg';
import Money2 from '../images/money/2.jpg';
import Money3 from '../images/money/3.jpg';
import Money4 from '../images/money/4.jpg';
import Money5 from '../images/money/5.jpg';
import Money6 from '../images/money/6.jpg';
import Money7 from '../images/money/7.jpg';
import Money8 from '../images/money/8.jpg';
import Money9 from '../images/money/9.jpg';
import Money10 from '../images/money/10.jpg';
import Money11 from '../images/money/11.jpg';

//FISH
import Fish1 from '../images/fish/1.png';
import Fish2 from '../images/fish/2.png';
import Fish3 from '../images/fish/3.png';

//CARDS
import Card1 from '../images/cards/1.png';
import Card2 from '../images/cards/2.png';
import Card3 from '../images/cards/3.png';

//BEVERAGES
import Drink1 from '../images/beverages/1.png';
import Drink2 from '../images/beverages/2.png';
import Drink3 from '../images/beverages/3.png';
import Drink4 from '../images/beverages/4.png';

//COPIES
import Copies1 from '../images/copies/1.png';

//TOYS
import Toy1 from '../images/toys/1.jpeg';
import Toy2 from '../images/toys/2.JPG';

//SNACKS
import Snack1 from '../images/snacks/1.jpeg';
import Snack2 from '../images/snacks/2.jpeg';
import Snack3 from '../images/snacks/3.jpeg';
import Snack4 from '../images/snacks/4.jpeg';

//GROCERIES
import Groceries1 from '../images/groceries/1.jpeg';
import Groceries2 from '../images/groceries/2.jpeg';
import Groceries3 from '../images/groceries/3.jpeg';

export const Products = [
	{
		path: '/products/product/toys',
		name: 'Toys',
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
		Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
		images: [ Toy1, Toy2 ],
		image: Toy1,
		alt: 'Toys, Stuffed Animals',
		price: [ 20, 30, 40 ],
		available: true,
		tagline: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod`
	},

	{
		path: '/products/product/snacks',
		name: 'Snacks',
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
		Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
		images: [ Snack1, Snack2, Snack3, Snack4 ],
		image: Snack1,
		alt: 'Snacks',
		price: [ 1, 2, 3 ],
		available: true,
		tagline: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod`
	},

	{
		path: '/products/product/groceries',
		name: 'Groceries',
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
		Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
		images: [ Groceries1, Groceries2, Groceries3 ],
		image: Groceries1,
		alt: 'Groceries',
		price: [ 'Varies per item' ],
		available: true,
		tagline: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod`
	},

	{
		path: '/products/product/medicine',
		name: 'Medicine & Herbs',
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
		Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
		images: [ Medicine1, Medicine2, Medicine3, Medicine4, Medicine5 ],
		image: Medicine1,
		alt: 'Medicine & Herbs',
		price: [ 1, 2, 3 ],
		available: true,
		tagline: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod`
	},

	{
		path: '/products/product/jewels',
		name: 'Jewelery',
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
		Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
		images: [ Jewels1, Jewels2, Jewels3, Jewels4 ],
		image: Jewels1,
		alt: 'Jewels',
		price: [ 20, 30, 40 ],
		available: true,
		tagline: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod`
	},

	{
		path: '/products/product/perfumes',
		name: 'Perfumes',
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
		Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
		images: [ Perfume1, Perfume2, Perfume3, Perfume4, Perfume5 ],
		image: Perfume1,
		alt: 'Perfume',
		price: [ 45, 50, 60 ],
		available: true,
		tagline: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod`
	},

	{
		path: '/products/product/masks',
		name: 'COVID-19 Masks',
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
		Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
		images: [ Mask1, Mask2, Mask3, Mask4 ],
		image: Mask1,
		alt: 'Masks',
		price: [ 1, 10, 15 ],
		available: true,
		tagline: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod`
	},

	{
		path: '/products/product/humitas',
		name: 'Humitas',
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
		Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
		images: [ Huma1 ],
		image: Huma1,
		alt: 'Humitas',
		price: [ 2 ],
		//0, 5, 6 === Sun, Friday, Sat
		available: [ 0, 5, 6 ].includes(new Date().getDay()),
		tagline: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod`
	},

	{
		path: '/products/product/albacora',
		name: 'Albacora',
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
		Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
		images: [ Fish1, Fish2, Fish3 ],
		image: Fish2,
		alt: 'Albacora',
		price: [ 6 ],
		available: true,
		tagline: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod`
	},

	{
		path: '/products/product/calling-cards',
		name: 'Calling Cards',
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
		Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
		images: [ Card1, Card2, Card3 ],
		image: Card1,
		alt: 'Calling Cards',
		price: [ 2, 5 ],
		available: true,
		tagline: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod`
	},

	{
		path: '/products/product/beverages',
		name: 'Beverages',
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
		Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
		images: [ Drink1, Drink2, Drink3, Drink4 ],
		image: Drink1,
		alt: 'Beverages',
		price: [ 1, 2, 3 ],
		available: true,
		tagline: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod`
	},

	{
		path: '/products/product/copies',
		name: 'Copies',
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
		Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
		images: [ Copies1 ],
		image: Copies1,
		alt: 'Copies',
		price: [ 1 ],
		available: true,
		tagline: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod`
	},

	{
		path: '/products/product/electronics',
		name: 'Electronics',
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
		Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
		images: [ Ele1, Ele2, Ele3, Ele4 ],
		image: Ele1,
		alt: 'Electronics',
		price: [ 'Varies per item' ],
		available: true,
		tagline: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod`
	},

	{
		path: '/products/product/smart-phones',
		name: 'Smart Phones',
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
		Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
		images: [ Phone1, Phone2, Phone3, Phone4, Phone5 ],
		image: Phone3,
		alt: 'Smart Phones',
		price: [ 'Varies per phone' ],
		available: true,
		tagline: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod`
	},

	{
		path: '/products/product/apparel',
		name: 'Apparel',
		description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
		Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
		images: [ Apparel1, Apparel2, Apparel3 ],
		image: Apparel2,
		alt: 'Apparel',
		price: [ 'Varies per item' ],
		available: true,
		tagline: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod`
	}
];

export const Services = {
	SEND_MONEY: {
		path: '/products/service/send-money',
		name: 'Send Money',
		description: "Send & Receive Money around the world using Afex's service!",
		image: AFEX,
		images: [ Money5, Money7 ],
		paragraphs: [
			`"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
			Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
			dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`,
			`"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
			eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem 
			quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
			Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora 
			incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis 
			suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse 
			quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"`
		],
		goals: [ 'This is goal 1', 'This is goal 2', 'This is goal 3' ],
		tagline: `Send & Receive Money around the world using Afex's service!`
	},

	PAY_BILL: {
		path: '/products/service/pay-bills',
		name: 'Pay Bills',
		description: `Pay bills ranging from Cablevision to PSEG, Optimum, and more!`,
		image: Payment,
		images: [ Money10, Money11 ],
		paragraphs: [
			`"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
			Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
			dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`,
			`"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
			eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem 
			quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
			Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora 
			incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis 
			suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse 
			quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"`
		],

		goals: [ 'This is goal 1', 'This is goal 2', 'This is goal 3' ],
		tagline: `Pay bills ranging from Cablevision to PSEG, Optimum, and more!`
	},

	BOOST_RECHARGE: {
		path: '/products/service/recharge',
		name: 'Phone Recharges',
		description: `Need a Recharge? Let us help you add more minutes to your Boss Revolution account!`,
		image: BossRevolution,
		images: [ Money8, Money9 ],
		paragraphs: [
			`"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
			Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
			dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`,
			`"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
			eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem 
			quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
			Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora 
			incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis 
			suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse 
			quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"`
		],

		goals: [ 'This is goal 1', 'This is goal 2', 'This is goal 3' ],
		tagline: `Need a Recharge? Let us help you add more minutes to your Boss Revolution account!`
	},

	MONEY_ORDER: {
		path: '/products/service/money-order',
		name: 'Money Order',
		description: `Use our RIA Money Order service to send money quickly.`,
		image: MoneyOrder,
		images: [ Money4, Money6 ],
		paragraphs: [
			`"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
			Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
			dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`,
			`"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
			eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem 
			quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
			Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora 
			incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis 
			suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse 
			quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"`
		],

		goals: [ 'This is goal 1', 'This is goal 2', 'This is goal 3' ],
		tagline: `Use our RIA Money Order service to send money quickly.`
	},

	PACKAGING: {
		path: '/products/service/packaging',
		name: 'Packaging',
		description: `Need something sent to Ecuador? Use our express shipping service!`,
		image: Geomil,
		images: [ Money3, Money2 ],
		paragraphs: [
			`"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
			Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
			dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`,
			`"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
			eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem 
			quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
			Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora 
			incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis 
			suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse 
			quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"`
		],

		goals: [ 'This is goal 1', 'This is goal 2', 'This is goal 3' ],
		tagline: `Need something sent to Ecuador? Use our express shipping service!`
	},

	CASH_CHECKS: {
		path: '/products/service/cash-checks',
		name: 'Cash Checks',
		description: `Turn in your payroll checks for cash quickly and for a low fee.`,
		image: CashCheck,
		images: [ Money1, Money3 ],
		paragraphs: [
			`"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
			Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
			dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`,
			`"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
			eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem 
			quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
			Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora 
			incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis 
			suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse 
			quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"`
		],

		goals: [ 'This is goal 1', 'This is goal 2', 'This is goal 3' ],
		tagline: `Turn in your payroll checks for cash quickly and for a low fee.`
	}
};
