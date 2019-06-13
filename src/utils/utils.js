

const URL_PREFIX = process.env.GATSBY_NFUNC_URL_PREFIX;
const ZAURU_PREFIX = process.env.GATSBY_ZAURU_PREFIX;

const headers = {
	Accept: 'application/json',
	'Content-type': 'application/json',
	'X-User-Email': process.env.GATSBY_EMAIL,
	'X-User-Token': process.env.GATSBY_TOKEN
};

const NF_ENDPOINTS = {
	tiposDeTurno: URL_PREFIX + process.env.GATSBY_URL_TIPOS_DE_TURNO,
	turnosNoVendidos: URL_PREFIX + process.env.GATSBY_URL_TURNOS_NO_VENDIDOS,
	turnosVendidos: URL_PREFIX + process.env.GATSBY_URL_TURNOS_VENDIDOS,
	REASIGNAR: URL_PREFIX + process.env.GATSBY_URL_REASIGNAR,
	UNO: URL_PREFIX + process.env.GATSBY_URL_UNO,
	DOS: URL_PREFIX + process.env.GATSBY_URL_DOS,
	TRES: URL_PREFIX + process.env.GATSBY_URL_TRES,
	CUATRO: URL_PREFIX + process.env.GATSBY_URL_CUATRO,
	CINCO: URL_PREFIX + process.env.GATSBY_URL_CINCO
};

const ZAURU_URL = {
	tiposDeTurno: ZAURU_PREFIX + process.env.GATSBY_ENDPOINT_TIPOS_DE_TURNO,
	turnosNoVendidos: ZAURU_PREFIX + process.env.GATSBY_ENDPOINT_TURNOS_NO_VENDIDOS,
	turnosVendidos: ZAURU_PREFIX + process.env.GATSBY_ENDPOINT_TURNOS_VENDIDOS,
	UNO: ZAURU_PREFIX + process.env.GATSBY_ENDPOINT_UNO,
	DOS_1: ZAURU_PREFIX + process.env.GATSBY_ENDPOINT_DOS_1,
	DOS_2: process.env.GATSBY_ENDPOINT_DOS_2,
	TRES: ZAURU_PREFIX + process.env.GATSBY_ENDPOINT_TRES,
	CUATRO_1: ZAURU_PREFIX + process.env.GATSBY_ENDPOINT_CUATRO_1,
	CUATRO_2: process.env.GATSBY_ENDPOINT_CUATRO_2,
	CINCO_1: ZAURU_PREFIX + process.env.GATSBY_ENDPOINT_CINCO_1,
	CINCO_2: process.env.GATSBY_ENDPOINT_CINCO_2
};

//2 https://zauru.herokuapp.com/inventories/bookings/****ID****/deliver.json
//4 https://zauru.herokuapp.com/inventories/bookings/****ID****/deliver.json
//5 https://zauru.herokuapp.com/sales/unpaid_invoices/****ID****.json

const ENV = process.env.GATSBY_ENV;

export { headers, ZAURU_URL as URLS, NF_ENDPOINTS as ENDPOINTS, ENV };
