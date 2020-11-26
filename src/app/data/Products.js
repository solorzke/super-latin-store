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
		name: 'Juguetes',
		description: `Coge un peluche o un animal de peluche para regalar a tu ser querido en la ocasión adecuada. Busque el correcto que
		tiene el tamaño correcto y describe cómo te preocupas por ellos. Tenemos de Mickey Mouse, Osos y otros.`,
		images: [ Toy1, Toy2 ],
		image: Toy1,
		alt: 'Toys, Stuffed Animals',
		price: [ 20, 30, 40 ],
		available: true,
		tagline: `Peluches, grandes y pequeños, para regalos`,
		points: [ 'Varios tamaños, incluido el tamaño natural.', 'Mickey Mouse, Sonic, Animales' ]
	},

	{
		path: '/products/product/snacks',
		name: 'Golosinas',
		description: `¿Necesitas un bocado rápido antes de salir? Coge una bolsa de patatas fritas u otros bocadillos en nuestra tienda. Coge Bon Bons, Tango, Manicho y otros
		snacks importados que te gusten.`,
		images: [ Snack1, Snack2, Snack3, Snack4 ],
		image: Snack1,
		alt: 'Snacks',
		price: [ 1, 2, 3 ],
		available: true,
		tagline: `Chifles, Dulces, Bon Bons, Tango y mas.`,
		points: [ 'Manicho, Tango, Snickers, Huevitos', 'Chips, Chifles', 'Bon Bons' ]
	},

	{
		path: '/products/product/groceries',
		name: 'Comestibles',
		description: `A su conveniencia, también proporcionamos artículos comestibles para agregar a su cocina cuando necesite cocinar.
		Tenemos varios artículos que uno necesitaría preparar para su almuerzo o cena. Granos, Frijoles, Pescado, Verduras, Especias, Mote y más.`,
		images: [ Groceries1, Groceries2, Groceries3 ],
		image: Groceries1,
		alt: 'Groceries',
		price: [ 'Varía por artículo' ],
		available: true,
		tagline: `Albacora, Granos, Mota, Maíz, Frijoles, Yuca, Especias.`,
		points: [ 'Albacora, Granos, Mote, Choclo, Frijoles, Yuca, Condimentos.' ]
	},

	{
		path: '/products/product/medicine',
		name: 'Medicina y Hierbas',
		description: `Me siento mal? Nuestra tienda ofrece remedios rápidos para combatir la gripe, los dolores de cabeza, el dolor, la fiebre, el dolor y otros.
		Ofrecemos medicamentos de venta libre que se pueden encontrar en cualquier farmacia aquí a su conveniencia, cuando lo necesite.`,
		images: [ Medicine1, Medicine2, Medicine3, Medicine4, Medicine5 ],
		image: Medicine1,
		alt: 'Medicine & Herbs',
		price: [ 1, 2, 3 ],
		available: true,
		tagline: `Theraflu, Alka-Seltzer, Aspirina, Vaporub, Sangre De Drago y mas.`,
		points: [
			'Dolores De Cabeza: Tylenol, Advil, Bayer, Finalin Forte',
			'Flu: Singripal, Lemon FLu, Theraflu',
			'Indigestión: Tums, Pepto Bismol',
			'Llagas y Raspaduras: Sangre de Drago',
			'Mentol: Mentol Chino, Vaporub'
		]
	},

	{
		path: '/products/product/jewels',
		name: 'Joyería',
		description: `Las joyas son algo especial que complementa el aspecto del usuario y nuestra tienda le ofrece una selección de varios tipos.
		para elegir, incluidos aretes, anillos, pulseras y otras piezas de joyería afines a la cultura latinoamericana, como pulseras de 7 metales y
		más.`,
		images: [ Jewels1, Jewels2, Jewels3, Jewels4 ],
		image: Jewels1,
		alt: 'Jewels',
		price: [ 20, 30, 40 ],
		available: true,
		tagline: `Pulseras, pendientes, collares, anillos.`,
		points: [ 'Pendientes, collares, anillos', 'Plata, oro, bronce disponible', 'Pulseras de 7 metales disponible' ]
	},

	{
		path: '/products/product/perfumes',
		name: 'Perfumes',
		description: `Visita nuestra tienda y echa un vistazo a la larga lista de marcas que tenemos disponibles tanto para hombre como para mujer. Tenemos colonias y
		perfumes de marcas de alta calidad como Ralph Lauren, Yanbal, Armani y muchas más.`,
		images: [ Perfume1, Perfume2, Perfume3, Perfume4, Perfume5 ],
		image: Perfume1,
		alt: 'Perfume',
		price: [ 45, 50, 60 ],
		available: true,
		tagline: `Yanbal Cologne, Polo Ralph Lauren, Giorgio Armani, Bleu De Chanel`,
		points: [
			'Colonias/perfumes de Yanbal disponibles para su selección',
			'Marcas de alta calidad disponibles',
			'100% Autentico'
		]
	},

	{
		path: '/products/product/masks',
		name: 'COVID-19 Mascarillas',
		description: `Con la pandemia de COVID-19 en curso que continúa su marcha, es importante continuar con los procedimientos básicos de seguridad y usar un
		máscara para luchar contra el virus y proteger nuestra seguridad y la de quienes nos rodean. Vendemos máscaras de alta calidad que van hasta 6
		veces la capa protectora para garantizar su seguridad y la de los demás.`,
		images: [ Mask1, Mask2, Mask3, Mask4 ],
		image: Mask1,
		alt: 'Masks',
		price: [ 1, 10, 15 ],
		available: true,
		tagline: `KN-95 mascarillas, máscaras de diseñador, paquetes de máscarillas y más.`,
		points: [
			'Máscaras quirúrgicas, edición militar, máscaras KN-95 disponibles',
			'Máscaras de diseñador para un look más moderno pero seguro',
			'El tamaño se adapta a todos'
		]
	},

	{
		path: '/products/product/humitas',
		name: 'Humitas y Tamales',
		description: `Algunos de los platos más populares de nuestra comunidad latina, la humita y el tamal son un elemento básico de nuestra cultura y ¡los vendemos aquí también!
		Debido a la naturaleza popular de estos artículos, se agotan muy rápidamente. Si está interesado en hacer un pedido, considere hacer un pedido antes o el día anterior.
		Estos artículos solo están disponibles los fines de semana.`,
		images: [ Huma1 ],
		image: Huma1,
		alt: 'Humitas',
		price: [ 2, 2.5 ],
		//0, 5, 6 === Sun, Friday, Sat
		available: [ 0, 5, 6 ].includes(new Date().getDay()),
		tagline: `Humitas y tamales ecuatorianos frescos: solo disponible los fines de semana.`,
		points: [
			'Humitas y tamales frescos disponibles en la mañana.',
			'Solo disponible los sábados y domingos.',
			'Considere hacer un pedido con anticipación para asegurarse de que pueda obtener algunos.'
		]
	},

	{
		path: '/products/product/albacora',
		name: 'Albacora',
		description: `No se puede hacer un encebollado sin albacora. En lugar de hacer un viaje al mercado de pesca, pasa a recoger atún blanco,
		popular entre los ecuatorianos, y ahórrese dinero y tiempo.`,
		images: [ Fish1, Fish2, Fish3 ],
		image: Fish2,
		alt: 'Albacora',
		price: [ 6 ],
		available: true,
		tagline: `Filete de albacora congelado, popular para Encebollados.`,
		points: [ '$6.5 por lb' ]
	},

	{
		path: '/products/product/calling-cards',
		name: 'Tarjetas de Llamadas',
		description: `Use una tarjeta de llamadas para hacer llamadas de larga distancia a cualquier persona en cualquier lugar a bajo costo, con un teléfono excelente
		servicio brindado por empresas como Tigo, Claro, Boss Revolution y más`,
		images: [ Card1, Card2, Card3 ],
		image: Card1,
		alt: 'Calling Cards',
		price: [ 2, 5 ],
		available: true,
		tagline: `Tarjetas telefónicas para Boss Revolution, Tigo, Yellow y Claro.`,
		points: [
			'Utilice tarjetas telefónicas en cualquier lugar y en cualquier momento.',
			'Los proveedores de servicios telefónicos incluyen: Tigo, Claro, Boss Revloution, Yellow.',
			'Disponible desde $ 2, $ 5, $ 7 y $ 10'
		]
	},

	{
		path: '/products/product/beverages',
		name: 'Bebidas',
		description: `Tenemos bebidas que incluyen productos importados y productos lácteos cuando están disponibles. Marcas como Coca-Cola, Redbull, Gatorade, Guitig,
		Goya, Snapple y más.`,
		images: [ Drink1, Drink2, Drink3, Drink4 ],
		image: Drink1,
		alt: 'Beverages',
		price: [ 1, 2, 3 ],
		available: true,
		tagline: `Refrescos, Bebidas Energéticas, Agua, Snapple, Lácteos.`,
		points: [
			'Sodas: Coca Cola, Sprite, Pepsi, Manzana, Inca Cola, Tropical',
			'Bebidas energéticas: Redbull, Monster Energy, Gatorade',
			'Jugo: Aloe, Snapple, Cocotal, Jugo de frutas',
			'Agua: Guitig, Castello, Poland Springs',
			'Lácteos: yogur, leche'
		]
	},

	{
		path: '/products/product/copies',
		name: 'Copias',
		description: `Necesitas imprimir un documento? Hacer copias? Crear un documento de Word? Visítenos donde podemos ayudarlo a usar nuestra estación de impresión para
		imprima documentos, haga copias y cree también.`,
		images: [ Copies1 ],
		image: Copies1,
		alt: 'Copies',
		price: [ 1 ],
		available: true,
		tagline: `Copias y escaneos de documentos en color o sin color.`,
		points: [
			'Haga copias de documentos PDF de hasta 20 páginas.',
			'Escanear documentos',
			'Cree sus documentos de Word para imprimirlos más tarde.'
		]
	},

	{
		path: '/products/product/electronics',
		name: 'Electrónicos',
		description: `Tenemos una selección de varios tipos diferentes de electrónica para satisfacer sus necesidades para cualquier propósito, desde cargadores
		a las cámaras de vigilancia. La lista incluye:`,
		images: [ Ele1, Ele2, Ele3, Ele4 ],
		image: Ele1,
		alt: 'Electronics',
		price: [ 'Varía por artículo' ],
		available: true,
		tagline: `Audifonos, Cables de carga, cases, protectors, speakers.`,
		points: [
			'Phone chargers, cables, protectores de telefono, protectores de pantalla',
			'Altavoces y auriculares de Bluetooth, Airpods',
			'Cámaras Surveliance, Antenas',
			'Controles de remoto'
		]
	},

	{
		path: '/products/product/smart-phones',
		name: 'Teléfonos',
		description: `Gracias a Boost Mobile, podemos ayudarlo con la compra de cualquiera de nuestros teléfonos inteligentes cuando cambie
		para Boost Mobile. Tenemos algunos de los mejores y asequibles teléfonos inteligentes disponibles ahora, incluidos iPhones, Samsung A Series 10, 20, 21 y más.
		Todo actualizado a un bajo costo para usted. También ofrecemos actualizaciones gratuitas para cualquiera de los miembros existentes de Boost (sujeto a quien califique) y
		Carrier Switching a bajo costo. Los teléfonos desbloqueados también están disponibles para su compra.`,
		images: [ Phone1, Phone2, Phone3, Phone4, Phone5 ],
		image: Phone3,
		alt: 'Smart Phones',
		price: [ 'Varía según el teléfono' ],
		available: true,
		tagline: `Teléfonos inteligentes y teléfonos desbloqueados aprobados por Boost: el precio varía`,
		points: [
			'Teléfonos con Android y dispositivos iPhone disponibles',
			'Elija cualquier teléfono inteligente de su elección de nuestro catálogo, como la serie Samsung A, cuando se cambie a Boost Mobile.',
			'Dispositivos desbloqueados disponibles, iPhone y Samsung.',
			'Actualmente disponible: Samsung A10, A20, A21, iPhone 6 Plus'
		]
	},

	{
		path: '/products/product/apparel',
		name: 'Vestidos',
		description: `Tenemos una amplia lista de prendas que van desde gorras, sombreros, gorros, guantes, jerseys y anteojos.
		Nuestra selección de camisetas incluye equipos nacionales de fútbol como Ecuador o clubes como Barcelona, ​​Liga de Quito, Emelec y más.
		Los sombreros están disponibles para cualquier tipo de clima, frío o soleado.`,
		images: [ Apparel1, Apparel2, Apparel3 ],
		image: Apparel2,
		alt: 'Apparel',
		price: [ 'Varía por artículo' ],
		available: true,
		tagline: `Sombreros, gorras, bufandas, camisas, guantes, chaquetas.`,
		points: [
			'Sombreros apropiados para cualquier clima, incluidos gorros y pasamontañas',
			'Camisetas deportivas que incluyen equipos y clubes nacionales de fútbol',
			'Guantes apropiados para trabajos en maquinaria.',
			'Gafas de sol en varios tamaños diferentes.'
		]
	}
];

export const Services = {
	SEND_MONEY: {
		path: '/products/service/send-money',
		name: 'Enviar Dinero',
		description: 'Envíe y reciba dinero en todo el mundo utilizando el servicio de Afex.',
		image: AFEX,
		images: [ Money5, Money7 ],
		paragraphs: [
			`Super Latin Store ofrece a nuestros clientes la posibilidad de enviar dinero a todo el mundo utilizando nuestra Red de Transferencia de Dinero AFEX,
			de forma rápida y segura. AFEX nos permite configurar a nuestros clientes con sus propias cuentas y prepararnos para enviar dinero a casi cualquier
			institución financiera o banco en el destino de su elección. La red de AFEX es uno de los mejores proveedores globales de pagos de dinero
			en el país y nos sentimos honrados de que trabajen con nosotros para ayudar a nuestros clientes. Si eres alguien que necesita enviar dinero
			a sus seres queridos a cualquier país de América del Sur y Central, o España, no busque más porque podemos ayudarlo a enviar ese dinero
			rápidamente antes del final del día.`,
			`Casi cualquier persona con o sin una identificación válida puede solicitar enviar dinero. Somos capaces de ganar dinero
			transferencias a países como México, Honduras, Guatemala, Perú, Ecuador, Brasil, Venezuela, Colombia, República Dominicana,
			Puerto Rico, España, Estados Unidos, Chile y otros. Puede decidir qué tipo de transferencia de dinero desea enviar,
			mediante pago en ventanilla o depósito bancario. Sin embargo, las transferencias de depósitos bancarios requieren una identificación adicional del destinatario en su
			país respectivo para continuar. Una vez que se realizan las transferencias, deben estar disponibles para que el destinatario las verifique.
			dentro de una hora. Dado que estamos conectados con la red de transferencia de dinero, también podemos recibir giros postales realizados
			de cualquier parte del mundo, siempre que trabajen dentro de la red. Visítanos para empezar a enviar o recibir
			fondos a quien sea en cualquier momento.`
		],
		goals: [ 'This is goal 1', 'This is goal 2', 'This is goal 3' ],
		tagline: `Envíe y reciba dinero en todo el mundo utilizando el servicio de Afex.`
	},

	PAY_BILL: {
		path: '/products/service/pay-bills',
		name: 'Pagar Facturas',
		description: `Pague facturas que van desde Cablevision hasta PSEG, Optimum y más!`,
		image: Payment,
		images: [ Money10, Money11 ],
		paragraphs: [
			`Pagar facturas es parte de la vida durante todo el año y entendemos que hay personas que luchan por descubrir cómo pagarlas cuando vivimos.
			con una sociedad tecnológica acelerada con aplicaciones y computadoras. Es con este principio en mente que ofrecemos ayudarlo
			en pagar sus facturas y aliviarlo de la carga de averiguar cómo, manteniéndolo simple y rápido. Si es un pago de facturación
			que debe ser rápido o con anticipación, puede estar tranquilo sabiendo que en Super Latin Store, nos ocupamos de ello.`,
			`Realizamos pagos en su nombre a empresas como PSEG, Cablevision, Optimum, Verizon Fios, multas de estacionamiento, agua y más.
			Estas empresas y otras por igual, abarcan los servicios públicos que usamos todos los días, como electricidad, agua e Internet, lo que hace que sea importante que usted
			haga esos pagos a tiempo. También realizamos pagos de facturas telefónicas para planes prepagos a empresas como Boost Mobile, Simple Mobile, Ultra Mobile,
			T-Mobile, Verizon y otros para ti. Simplemente traiga su factura y con gusto lo ayudaremos a solucionarlo.`
		],

		goals: [ 'This is goal 1', 'This is goal 2', 'This is goal 3' ],
		tagline: `Pague facturas que van desde Cablevision hasta PSEG, Optimum y más!`
	},

	BOOST_RECHARGE: {
		path: '/products/service/recharge',
		name: 'Recargas',
		description: `Necesitas una recarga? Permítanos ayudarlo a agregar más minutos a su telefono.`,
		image: BossRevolution,
		images: [ Money8, Money9 ],
		paragraphs: [
			`Estamos asociados con Boss Revolution, un servicio que brinda una red de bajo costo para realizar llamadas telefónicas en teléfonos móviles prepagos,
			a nuestros clientes que utilizan regularmente teléfonos prepagos para llamadas de larga distancia. Boss Revolution permite a sus clientes realizar recargas de teléfonos
			en sus cuentas para agregar más minutos y datos móviles en sus teléfonos. Las recargas son simples, elija un plan prepago con la cantidad de minutos
			y datos móviles en mente, y pague en cualquier proveedor de servicios en el lugar, como el nuestro. Contamos con planes celulares que cubren su uso por un día, semana,
			o mes, todo depende de cuánto le gustaría utilizar su servicio.`,
			`Boss Revolution también proporciona a sus clientes recargas de teléfonos internacionales a varios países dentro de sus respectivos teléfonos celulares.
			empresas también. Nuestros clientes realizan periódicamente estas recargas a empresas de telefonía como Tigo, Claro, Movistar, entre otras, todas las cuales funcionan
			con el servicio de Boss Revolution. Puede proporcionar a cualquier persona en esos países un servicio prepago a su número de teléfono a través de Boss
			Revolución. También le proporcionamos el método alternativo de tarjetas telefónicas de Boss Revolution si necesita realizar llamadas de larga distancia.`
		],

		goals: [ 'This is goal 1', 'This is goal 2', 'This is goal 3' ],
		tagline: `Necesitas una recarga? Permítanos ayudarlo a agregar más minutos a su telefono.`
	},

	MONEY_ORDER: {
		path: '/products/service/money-order',
		name: 'Money Order',
		description: `Utilice nuestro servicio RIA Money Order para enviar dinero rápidamente.`,
		image: MoneyOrder,
		images: [ Money4, Money6 ],
		paragraphs: [
			`Los giros postales son otro método convencional para transferir dinero a un destino y le proporcionamos giros postales a través de RIA
			pago nework. Super Latin Store no funciona con Western Union o Moneygram, sin embargo, RIA es una alternativa popular que también lo hace
			rápido y fácil de crear giros postales para cualquier persona en el lugar.`,
			`Casi cualquier persona puede solicitar un giro postal en cualquier momento. Simplemente díganos cuánto le gustaría pagar por el pedido y nos encargaremos
			el resto rápidamente. Una vez que se haya creado y pagado su pedido, estará listo para usar ese giro postal como desee. ¡Eso fue fácil!`
		],

		goals: [ 'This is goal 1', 'This is goal 2', 'This is goal 3' ],
		tagline: `Utilice nuestro servicio RIA Money Order para enviar dinero rápidamente.`
	},

	PACKAGING: {
		path: '/products/service/packaging',
		name: 'Paqueteria',
		description: `Necesitas enviar algo a Ecuador? Utilice nuestro servicio de envío urgente!`,
		image: Geomil,
		images: [ Money3, Money2 ],
		paragraphs: [
			`Super Latin Store finalmente ofrece envío de paquetes exprés a todas las provincias y distritos de Ecuador únicamente. Habiendo llegado a un acuerdo
			con Geomil Express, una empresa de envío expreso, ahora tenemos la capacidad de enviar sus paquetes a Ecuador, sin riesgo, a través del
			consulado. Todos los ciudadanos ecuatorianos pueden postularse para enviar un número selecto de artículos a cualquier persona en Ecuador y que se les entregue lo siguiente
			semana. El servicio de Geomil está garantizado para ayudarlo a tener un cuidado y responsabilidad absolutos con todos sus artículos hasta su destino.`,
			`Para calificar para el envío expreso, tanto el remitente como el destinatario deben cumplir algunos requisitos previos. Ambas partes deben
			presentar su cédula ecuatoriana o cédula de identificación en nuestra tienda para confirmar su condición de ciudadanos válidos. Si es residente aquí en los EE. UU.,
			asegúrese de estar registrado en el consulado de Ecuador antes de considerar realizar un envío. Posteriormente, indícanos los detalles de su destino.
			y el contenido que se enviará. Uno de nuestros representantes le explicará más detalles. Solo enviamos hasta 8 libras, así que empaca liviano y
			el parto no debería tardar más de 1 a 2 semanas. ¡Considere hacer un envío con nosotros!`
		],

		goals: [ 'This is goal 1', 'This is goal 2', 'This is goal 3' ],
		tagline: `Necesitas enviar algo a Ecuador? Utilice nuestro servicio de envío urgente!`
	},

	CASH_CHECKS: {
		path: '/products/service/cash-checks',
		name: 'Cambiar Cheques',
		description: `Entregue sus cheques de nómina por efectivo rápidamente y por una tarifa baja.`,
		image: CashCheck,
		images: [ Money1, Money3 ],
		paragraphs: [
			`Quiere convertir esos cheques de nómina en efectivo rápidamente? Visite nuestro lugar cualquier día de la semana y podemos ayudarlo a cobrar esos cheques por usted sin
			necesidad de correr al banco, comodidad en su máxima expresión. Por el momento solo aceptamos cheques de nómina de empresas aprobadas o empleadores con un
			número de cuenta comprobable. Por tanto, no se aceptarán cheques personales.`,
			`Solo cambiamos cheques hasta $ 999 y no se deben firmar hasta que nos los presente en la tienda. Para cobrar un cheque, debe proporcionar
			nosotros con cualquier prueba de identificación para que podamos confirmar su identidad. Nuestra tarifa de conveniencia es siempre el 1.5% de los cheques de nómina y no deben anularse
			después de 90 días.`
		],

		goals: [ 'This is goal 1', 'This is goal 2', 'This is goal 3' ],
		tagline: `Entregue sus cheques de nómina por efectivo rápidamente y por una tarifa baja.`
	}
};
