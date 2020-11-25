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
		description: `Grab a plushie or stuffed animal to give as a gift to your loved one for the right occasion. Look for the right one that
		has the right size and describes how you care about them. We have from Mickey Mouse, Bears, and others.`,
		images: [ Toy1, Toy2 ],
		image: Toy1,
		alt: 'Toys, Stuffed Animals',
		price: [ 20, 30, 40 ],
		available: true,
		tagline: `Plushies, big and small - for gifts`,
		points: [ 'Various sizes including life size.', 'Mickey Mouse, Sonic, Animals' ]
	},

	{
		path: '/products/product/snacks',
		name: 'Snacks',
		description: `Need a quick bite before you head out? Grab a bag of chips or other snacks at our store. Grab Bon Bons, Tango, Manicho, and other 
		imported snacks that you like.`,
		images: [ Snack1, Snack2, Snack3, Snack4 ],
		image: Snack1,
		alt: 'Snacks',
		price: [ 1, 2, 3 ],
		available: true,
		tagline: `Platain Chips, Candy, Bon Bons, Tango and more.`,
		points: [ 'Manicho, Tango, Snickers, Huevitos', 'Chips, Plaintain Chips', 'Bon Bons' ]
	},

	{
		path: '/products/product/groceries',
		name: 'Groceries',
		description: `At your convenience, we also provide grocery items to add to your kitchen whenever you're in the need to cook.
		We have various items that one would need to prepare for their lunch or dinner. Grains, Beans, Fish, Vegetables, Spices, Mote and more.`,
		images: [ Groceries1, Groceries2, Groceries3 ],
		image: Groceries1,
		alt: 'Groceries',
		price: [ 'Varies per item' ],
		available: true,
		tagline: `Albacore, Grains, Mote, Corn, Beans, Yuca, Spices.`,
		points: [ 'Albacore, Grains, Mote, Corn, Beans, Yuca, Spices.' ]
	},

	{
		path: '/products/product/medicine',
		name: 'Medicine & Herbs',
		description: `Feeling under the weather? Our store provides quick remedies to combat the flu, headaches, pain, fever, soreness, and others.
		We provide over the counter medication that can be located at any pharmacy here at your convenience, when you need it.`,
		images: [ Medicine1, Medicine2, Medicine3, Medicine4, Medicine5 ],
		image: Medicine1,
		alt: 'Medicine & Herbs',
		price: [ 1, 2, 3 ],
		available: true,
		tagline: `Theraflu, Alka-Seltzer, Aspirin, Vaporub, Sangre De Drago and more.`,
		points: [
			'Headaches: Tylenol, Advil, Bayer, Finalin Forte',
			'Flu: Singripal, Lemon FLu, Theraflu',
			'Indigestion: Tums, Pepto Bismol',
			'Sores & Scrapes: Sangre de Drago',
			'Menthol: Chinese Menthol, Vaporub'
		]
	},

	{
		path: '/products/product/jewels',
		name: 'Jewelery',
		description: `Jewelery is a special thing that compliments the look on the wearer and our store provides you with a selection of various types
		to choose from including earings, rings, bracelets and other pieces of jewelery akin to latin-american culture such as 7 metals bracelets and 
		more.`,
		images: [ Jewels1, Jewels2, Jewels3, Jewels4 ],
		image: Jewels1,
		alt: 'Jewels',
		price: [ 20, 30, 40 ],
		available: true,
		tagline: `Bracelets, earings, necklaces, rings.`,
		points: [
			'Earings, necklances, rings',
			'Silver, Gold, Bronze available',
			'7 Metal Bracelets and wrist bands available'
		]
	},

	{
		path: '/products/product/perfumes',
		name: 'Perfumes',
		description: `Visit our store and take a look at the long list of brands we have available for both men and women. We have colognes and 
		perfumes from high quality brands such as Ralph Lauren, Yanbal, Armani and many more.`,
		images: [ Perfume1, Perfume2, Perfume3, Perfume4, Perfume5 ],
		image: Perfume1,
		alt: 'Perfume',
		price: [ 45, 50, 60 ],
		available: true,
		tagline: `Yanbal Cologne, Polo Ralph Lauren, Giorgio Armani, Bleu De Chanel`,
		points: [
			'Yanbal colognes/perfumes available for selection',
			'High quality brands available',
			'100% Authentic'
		]
	},

	{
		path: '/products/product/masks',
		name: 'COVID-19 Masks',
		description: `With the ongoing COVID-19 Pandemic continuing to march on, its important to continue basic safety procedures and wear a 
		mask to fight against the virus and protect the safety of ourselves and those around us. We sell high quality masks ranging up to 6 
		times the protective layer to ensure a safety to yourself and others.`,
		images: [ Mask1, Mask2, Mask3, Mask4 ],
		image: Mask1,
		alt: 'Masks',
		price: [ 1, 10, 15 ],
		available: true,
		tagline: `KN-95 Masks, Surgical Masks, Designer Masks, Packs of Masks and more.`,
		points: [
			'Surgical Masks, Military Issue, KN-95 masks available',
			'Designer masks for a more fashionable yet secure look',
			'Size fits all'
		]
	},

	{
		path: '/products/product/humitas',
		name: 'Humitas',
		description: `Some of the most popular dishes in our latin community, the humita and tamale are a staple of our culture and we sell them here too!
		Because of the popular nature of these items, they sell out very quickly. If you're interested in ordering some, please consider placing an order early or the day before.
		These items are only available on the weekends.`,
		images: [ Huma1 ],
		image: Huma1,
		alt: 'Humitas',
		price: [ 2, 2.5 ],
		//0, 5, 6 === Sun, Friday, Sat
		available: [ 0, 5, 6 ].includes(new Date().getDay()),
		tagline: `Fresh Ecuadorian Humitas and Tamales - only available on weekends.`,
		points: [
			'Fresh Humitas and Tamales available in the morning.',
			'Only available on Saturdays and Sundays.',
			'Consider placing an order early to make sure you can get some.'
		]
	},

	{
		path: '/products/product/albacora',
		name: 'Albacora',
		description: `Can't make an encebollado without Albacore. Rather than making a trip to the fishing market, stop by to pick up albacore, 
		popular among Ecuadorians, and save yourself money and time.`,
		images: [ Fish1, Fish2, Fish3 ],
		image: Fish2,
		alt: 'Albacora',
		price: [ 6 ],
		available: true,
		tagline: `Frozen Albacore Filet, popular for Encebollados.`,
		points: [ '$6.5 per lb' ]
	},

	{
		path: '/products/product/calling-cards',
		name: 'Calling Cards',
		description: `Use a calling card to make long distance calls to anyone anywhere at low cost, with great phone 
		service provided by companies such as Tigo, Claro, Boss Revolution and more`,
		images: [ Card1, Card2, Card3 ],
		image: Card1,
		alt: 'Calling Cards',
		price: [ 2, 5 ],
		available: true,
		tagline: `Calling Cards for Boss Revolution, Tigo, Yellow, and Claro.`,
		points: [
			'Use calling cards anywhere at any time.',
			'Phone service providers include: Tigo, Claro, Boss Revloution, Yellow.',
			'Available from $2, $5, $7, and $10'
		]
	},

	{
		path: '/products/product/beverages',
		name: 'Beverages',
		description: `We have beverages including imported goods and dairy products when available. Brands like Coca-Cola, Redbull, Gatorade, Guitig,
		Goya, Snapple and more.`,
		images: [ Drink1, Drink2, Drink3, Drink4 ],
		image: Drink1,
		alt: 'Beverages',
		price: [ 1, 2, 3 ],
		available: true,
		tagline: `Sodas, Energy Drinks, Water, Snapple, Dairy.`,
		points: [
			'Sodas: Coca Cola, Sprite, Pepsi, Manzana, Inca Cola, Tropical',
			'Energy Drinks: Redbull, Monster Energy, Gatorade',
			'Juice: Aloe, Snapple, Cocotal, Fruit Juice',
			'Water: Guitig, Castello, Poland Springs',
			'Dairy: Yogurt, Milk'
		]
	},

	{
		path: '/products/product/copies',
		name: 'Copies',
		description: `Need to print a document? Make Copies? Create a Word Document? Pay us a visit where we can help you use our printing station to 
		print documents, make copies and create ones too. `,
		images: [ Copies1 ],
		image: Copies1,
		alt: 'Copies',
		price: [ 1 ],
		available: true,
		tagline: `Colored or Non-Colored copies and scans of documents.`,
		points: [
			'Make copies of PDF Documents up to 20 pages.',
			'Scan documents',
			'Create your Word Documents to print for later.'
		]
	},

	{
		path: '/products/product/electronics',
		name: 'Electronics',
		description: `We have a selection of various different types of electronics to meet your needs for any purpose ranging from chargers 
		to surveliance cameras. The list includes:`,
		images: [ Ele1, Ele2, Ele3, Ele4 ],
		image: Ele1,
		alt: 'Electronics',
		price: [ 'Varies per item' ],
		available: true,
		tagline: `Headphones, Charging cables, cases, protectors, speakers.`,
		points: [
			'Phone chargers, cables, cases, screen protectors',
			'Bluetooth speakers and headphones/airpods',
			'Surveliance Cameras, Antennas',
			'TV Remote'
		]
	},

	{
		path: '/products/product/smart-phones',
		name: 'Smart Phones',
		description: `Thanks to Boost Mobile, we can help you with your purchase of any of our smart phones when you switch 
		to Boost Mobile. We have some of the best and affordable smart phones available now including iPhones, Samsung A Series 10, 20, 21 and more.
		All kept up to date at a low cost to you. We also offer free upgrades to any of Boost's exisiting members (subject to whomever qualifies) and 
		Carrier Switching at a low cost. Unlocked phones are also available for purchase.`,
		images: [ Phone1, Phone2, Phone3, Phone4, Phone5 ],
		image: Phone3,
		alt: 'Smart Phones',
		price: [ 'Varies per phone' ],
		available: true,
		tagline: `Boost-approved smart phones and unlocked phones - pricing varies`,
		points: [
			'Android-based phones and iPhone devices available',
			'Pick any smart phone of your choice from our catalog such as the Samsung A series when you switch to Boost Mobile.',
			'Unlocked devices available, iPhone and Samsung.',
			'Currently in stock: Samsung A10, A20, A21, iPhone 6 Plus'
		]
	},

	{
		path: '/products/product/apparel',
		name: 'Apparel',
		description: `We have a wide list of apparel ranging from caps, hats, beanies, gloves, jerseys, and glasses.
		Our jersey selection includes national soccer teams like Ecuador, or clubs like Barcelona, Liga de Quito, Emelec and more.
		Hats are available for any type of weather, cold or sunny.`,
		images: [ Apparel1, Apparel2, Apparel3 ],
		image: Apparel2,
		alt: 'Apparel',
		price: [ 'Varies per item' ],
		available: true,
		tagline: `Hats, caps, scarves, shirts, gloves, jackets.`,
		points: [
			'Hats appropriate for any weather, including beanies and ski masks',
			'Sport Jerseys including national soccer teams and clubs',
			'Gloves appropriate for machinery work',
			'Sun glasses in various different sizes'
		]
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
			`Super Latin Store offers to our customers the ability to send money across the world using our AFEX Money Transfer Network, 
			quickly and safely. AFEX allows us to set up our clients with their own accounts and prepare to send money to almost any 
			financial institution or bank in the destination of their choice. AFEX's network is one the best global money payment providers 
			in the country and we are honored to have them working with us to help our clients. If you're someone who needs to send money 
			to loved ones to any country in South and Central America, or Spain, look no further because we can help you send that money 
			quickly before the end of the day.`,
			`Just about anyone with/without a valid piece of identification can apply to send money. We are capable of making money 
			transfers to countries like Mexico, Honduras, Guatemala, Peru, Ecuador, Brazil, Venezuela, Colombia, Dominican Republic, 
			Puerto Rico, Spain, United States, Chile, and others. You can decide what type of money transfer you'd wish to send, 
			via cash pickup or bank deposit. However, bank deposit transfers requires an additional ID from the recipient in their 
			respective country in order to proceed. Once transfers are made, they should become available for the recipient to check out
			within the hour. Since we're logged in with the money transfer network, we're also capable of receiving money orders made 
			from any part of the world, as long as they work within the network. Pay us a visit to start sending or receiving 
			funds to whomever at any time.`
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
			`Paying bills is part of life all year round and we understand there are people that struggle to figure out how to pay them when we live
			with an fast-paced technological society with applications and computers. Its with this principle in mind that we offer to assist you 
			in paying your bills and relieving you of the burden of figuring out how, by keeping it simple and quick. Whether its a billing payment 
			that needs to be quickly or ahead of time, you can rest easy knowing we at Super Latin Store, take care of it for you.`,
			`We make payments on your behalf to companies such as PSEG, Cablevision, Optimum, Verizon Fios, Parking Tickets, Water, and more. 
			These companies and others alike, encompass utilities we use everyday like electricity, water, and internet which makes it important that you
			make those payments on time. We also make phone bill payments for prepaid plans to companies such as Boost Mobile, Simple Mobile, Ultra Mobile,
			T-Mobile, Verizon, and others for you. Simply bring with you your bill and we'll happily help you take care of that.`
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
			`We are partnered with Boss Revolution, a service that provides a low-cost network to make phone calls on prepaid mobile phones,
			to our customers who regularly use prepaid phones for long distance calling. Boss Revolution allows its clients to make phone recharges
			on their accounts to add more minutes and cellular data on their phones. Recharges are simple, choose a prepaid plan with the amount of minutes
			and cellular data in mind, and pay it at any service provider on the spot, like ours. We have cellular plans that cover its use for a day, week,
			or month, it all depends on how much you'd like to use their service.`,
			`Boss Revolution also provides its clients with international phone recharges to various countries within their own respective cellular 
			companies too. Our clients regularly make these recharges to phone companies such as Tigo, Claro, Movistar, and others, all of  which work
			with Boss Revolution's service. You can provide anyone in those countries with a prepaid service to his/her phone number through Boss
			Revolution. We also provide the alternative method of calling cards by Boss Revolution to you if you need to make any long distance calls.`
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
			`Money Orders are another conventional method to transfering money to a destination and we provide money orders to you through RIA's 
			payment nework. Super Latin Store doesn't work with Western Union or Moneygram, however RIA is a popular alternative that also makes it
			quick and easy to create money orders to anyone on the spot.`,
			`Just about anyone can ask for a money order at any time. Simply tell us how much you'd like to put down for the order, and we'll handle
			the rest quickly. Once your order has been created and paid for, you are ready to use that money order however you'd like. That was easy!`
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
			`Super Latin Store is finally offering express package shippping to all provinces and districts in Ecuador only. Having reached an agreement
			with Geomil Express, an express shipping company, we now have the ability to send your packages to Ecuador, risk free, through the Ecuadorian
			consulate. All Ecuadorian citizens can apply to ship a select number of items to anyone in Ecuador and have it delivered to them the following
			week. Geomil's service is guaranteed to assist you with taking absolute care and responsibility with all your items to its destination.`,
			`In order to qualify for express shipping, a few prerequisites are required to be met by both the sender and the receiver. Both parties must 
			present their Ecuadorian cedula or identification card to our store to confirm their status as valid citizens. If you're a resident here in the US, make
			sure you are registered with the Ecuadorian consulate before considering making a shipment. Afterwards, provide us with details of its destination
			and the contents that will be shipped. More details will be explained by one of our representatives. We only ship up to 8 lbs so pack light, and
			delivery should take no more than 1-2 weeks. Consider making a shipment with us!`
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
			`Want to turn those payroll checks into cash quick? Visit our spot any day of the week and we can help you cash those checks for you without
			needing to rush to the bank, conveniency at its best. At the moment we only accept payroll checks from approved companies or employers with a 
			verifiable account number. Therefore, personal checks will not be accepted.`,
			`We only cash checks up to $999 and they must not be signed until they are presented to us at the store. In order to cash a check, you must provide
			us with any proof of identification so we can confirm your identity. Our convenience fee is always 1.5% of any payroll checks and they must not be void
			after 90 days.`
		],

		goals: [ 'This is goal 1', 'This is goal 2', 'This is goal 3' ],
		tagline: `Turn in your payroll checks for cash quickly and for a low fee.`
	}
};
