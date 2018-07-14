import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';

/**
 * Generated class for the ColorPickerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-color-picker',
    templateUrl: 'color-picker.html',
})
export class ColorPickerPage implements OnInit {

    public modalType: string;
    private selectedColor: string;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private storage: Storage
    ) {

        console.log(this.navParams.get('modalType'));
        this.modalType = this.navParams.get('modalType');

    }

    public ngOnInit() {

        this.storage.get('settings').then((settings) => {
            if (settings) {
                if (this.modalType === 'color') {

                    this.selectedColor = settings.color
                        ? settings.color
                        : '#000';

                } else {

                    this.selectedColor = settings.background
                        ? settings.background
                        : '#000';

                }
            }
        });
    }

    ionViewDidLoad() {}

    public setColor(color: string): void {
        this.selectedColor = color;
    }

    public save() {
        if (this.modalType === 'color') {
            this.saveColor();
        } else {
            this.saveBackground();
        }
    }

    public saveColor(): void {
        this.storage.get('settings').then((settings) => {
            settings = Object.assign(settings, { 'color': this.selectedColor })

            this.storage.set('settings', settings).then((settings) => {
                this.navCtrl.pop();
            });
        });
    }

    public saveBackground(): void {
        this.storage.get('settings').then((settings) => {
            settings = Object.assign(settings, { 'background': this.selectedColor })

            this.storage.set('settings', settings).then((settings) => {
                this.navCtrl.pop();
            });
        });
    }

}
