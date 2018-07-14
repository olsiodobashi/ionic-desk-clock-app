import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { ModalController } from 'ionic-angular';
import { ColorPickerPage } from '../color-picker/color-picker';

@Component({
    selector: 'page-settings',
    templateUrl: 'settings.html'
})
export class SettingsPage implements OnInit {

    public settings;

    constructor(
        public navCtrl: NavController,
        private modalCtrl: ModalController,
        private storage: Storage
    ) { }

    ionViewDidEnter() {
        this.getSettings();
    }

    public ngOnInit() {
    }

    private getSettings() {
        this.storage.get('settings').then(settings => {
            if (settings) {
                this.settings = settings;
            }
        });
    }

    private saveSettings(): void {
        this.storage.get('settings').then(settings => {
            settings = Object.assign(settings, {
                'font': this.settings.font,
                'size': this.settings.size,
                'background': this.settings.background,
                'color': this.settings.color
            });

            this.storage.set('settings', settings);
        });
    }

    public saveOptions(): void {
        this.saveSettings();
        this.navCtrl.pop();
    }

    public openBackgroundColorModal(modalType: string): void {
        const modal = this.modalCtrl.create(ColorPickerPage, {
            modalType: modalType
        });

        modal.onDidDismiss(() => {
            this.getSettings();
        })

        modal.present();
    }
}
