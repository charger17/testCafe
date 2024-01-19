import { Selector, t } from "testcafe";
import XPathSelector from "./xpath-selector";
import { ClientFunction } from "testcafe";

let tiempo = 500;
let sp = 0.9;

class Funciones{
    constructor(){
        this.bt1 = Selector('#Submit');
        this.name = Selector('#userName');
    }

    async T_max(ti=tiempo){
        await t
            .maximizeWindow()
            .wait(ti);
    }

    async T_texto(select, texto, velocidad=sp){
        await t
            .typeText(select, texto, {speed: velocidad});
    }

    async T_text_limpiar(select, texto, velocidad = sp){
        await t
            .typeText(select, texto, {replace: true}, {speed: velocidad});
    }

    async T_texto_xpath(selector, texto, velocidad = sp){
        const val = XPathSelector(selector);
        await t
            .typeText(val, texto, {speed: velocidad});
    }

    async T_texto_limpiar_xpath(selector, texto, velocidad = sp){
        const val = XPathSelector(selector);
        await t
            .typeText(val, texto, {replace: true}, {speed: velocidad});
    }

    async T_click(selector, texto, velocidad=sp){
        await t
            .click(selector, {speed:velocidad});
    }

    async T_click_xpath(selector, texto, velocidad=sp){
        const select =XPathSelector(selector);
        await t
            .click(select, {speed:velocidad});
    }

    async T_click_derecho_xpath(selector, velocidad=sp){
        const select = XPathSelector(selector);
        await t
            .rightClick(select, {speed:velocidad});
    }

    async T_doble_click_xpath(selector, velocidad=sp){
        const select = XPathSelector(selector);
        await t
            .doubleClick(select, {speed:velocidad});
    }

    async T_tiempo(ti = tiempo){
        await t
            .wait(ti);
    }

    async T_key(keyy, ti = tiempo, velocidad = sp){
        await t
            .pressKey(keyy);
    }

    async T_scrollSel(selector, ti= tiempo, velocidad = sp){
        await t
            .scrollIntoView(selector, {speed: velocidad})
            .wait(ti);
    }

    async T_scrollSel_xpath(selector, ti= tiempo, velocidad = sp){
        const select = XPathSelector(selector);
        await t
            .scrollIntoView(select, {speed: velocidad})
            .wait(ti);
    }

    async T_scrollxy(x, y, ti= tiempo, velocidad = sp){
        await t
            .scrollBy(x, y, {speed: velocidad})
            .wait(ti);
    } 

    async T_comboBox(selector, texto, ti=tiempo, velocidad = sp){
        const select = XPathSelector(selector);
        const SelectOption = select.find('option');

        await t
            .click(select)
            .click(SelectOption.withText(texto), {speed:velocidad});
    }

    async T_Navegar_url(direccion, ti = tiempo){
        await t
            .navigateTo(direccion)
            .wait(ti);
    }

    async T_Open_Window(direccion, ti = tiempo){
        await t
            .openWindow(direccion)
            .wait(ti);
    }

    async T_select_por_texto(tipo, texto){
        const select = Selector(tipo).withTexto(texto);
        return select;
    }

    async T_url_actual(){
        const url = await t.eval(() => document.documentURI);
        return url;
    }

    async T_validar_url(urlespera){
        const url = await t.eval(() => document.documentURI);
        await t.expect(url).eql(urlespera);
        console.log("Url validada");
    }

    async T_validar_selector_existe(select){
        await t.expect(Selector(select).filterVisible().exists).ok();
    }

    async T_validar_selector_existe_xpath(select){
        const val = XPathSelector(select);
        await t.expect(Selector(val).filterVisible().exists).ok();
    }

    async T_pantalla_true(ruta){
        await t
            .takeScreenshot({
                path: ruta,
                fullPage:true
            });
    }

    async T_pantalla_false(ruta){
        await t
            .takeScreenshot({
                path: ruta,
                fullPage:false
            });
    }

    async T_validar_contiene_texto(val,texto){
        await t.expect(val.innerText).contains(texto);
    }

    async T_validar_igualdad(val1,val2){
        await t.expect(val1).eql(val2);
    }

    async T_validar_diferentes(val1,val2){
        await t.expect(val1).notEql(val2);
    }

    async T_validar_mayorxy(val1,val2){
        await t.expect(val1).gt(val2);
    }

    async T_validar_mayor_igualxy(val1,val2){
        await t.expect(val1).gte(val2);
    }

    async T_validar_menor_igualxy(val1,val2){
        await t.expect(val1).lte(val2);
    }

    async T_valdiar_contiene_xy(val1, val2){
        await t.expect(val1).contains(val2);
    }

    async T_valdiar_no_contiene_xy(val1, val2){
        await t.expect(val1).notContains(val2);
    }

}

export default new Funciones();