import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { SettingsPage } from '../settings/settings';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage implements OnInit {

    public now = {
        hrs: '',
        mins: '',
        secs: ''
    };
    public settings;

    constructor(
        public navCtrl: NavController,
        private storage: Storage
    ) { }

    public ngOnInit() {
        this.setStorage();

        setInterval(() => {
            this.getTime();
        }, 1000);
    }

    ionViewDidEnter() {
        this.setStorage();
    }

    private setStorage() {
        this.storage.get('settings').then(settings => {
            if (settings) {
                this.settings = settings;
            }
        });
    }

    public getTime() {
        const date = new Date();

        const hrs = date.getHours();
        const mins = date.getMinutes();
        const secs = date.getSeconds();

        const formattedTime = this.fixDigits([hrs, mins, secs]);

        this.now.hrs = formattedTime[0];
        this.now.mins = formattedTime[1];
        this.now.secs = formattedTime[2];
    }

    public fixDigits(time: any[]): string[] {
        let formattedTimeArray = [];

        time.forEach((val) => {
            val = (val < 10) ? '0' + val : val;
            formattedTimeArray.push(val);
        });

        return formattedTimeArray;
    }

    public openSettingsPage() {
        this.navCtrl.push(SettingsPage);
    }

}
