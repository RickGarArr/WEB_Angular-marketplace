import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UIService {
    private sideMenuOffset: number;
    private sideMenu: HTMLElement;
    private toolbar: HTMLElement;

    constructor() { }

    public set sideMenuElement(sideMenu: HTMLElement) {
        this.sideMenu = sideMenu;
        this.sideMenuOffset = this.sideMenu.offsetWidth;
        console.log(this.sideMenu);
    }

    public get sideMenuElement(): HTMLElement {
        return this.sideMenu;
    }

    public set toolbarElement(toolbar: HTMLElement) {
        this.toolbar = toolbar;
        console.log(this.toolbar);
    }

    public get toolbarElement() {
        return this.toolbar;
    }

    toggleSideMenu() {
        if (this.sideMenu.classList.contains('active')) {
            this.sideMenu.classList.remove('active');
            this.sideMenu.classList.add('inactive');
            document.getElementById('dashboard').style.marginLeft = `0px`;
        } else {
            this.sideMenu.classList.remove('inactive');
            this.sideMenu.classList.add('active');
            document.getElementById('dashboard').style.marginLeft = `${this.sideMenuOffset}px`;
        }
    }
}