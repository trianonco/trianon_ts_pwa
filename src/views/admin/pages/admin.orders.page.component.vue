<template>
  <div class="admin page orders">
      <div class="wrapper">
          
          <h1>ORDENES DE COMPRA</h1>

          <div class="orders">
              
               <vue-good-table
                @on-selected-rows-change="selectionChanged"
               :search-options="{
                enabled: true
              }"
              :select-options="{ enabled: true }"
                    :columns="columns"
                    :rows="queue">
  <div slot="selected-row-actions">
    <button style="display:block" @click="downloadInvoices()"> Descargar InVoices </button>
  </div>
               </vue-good-table>

          </div>

      </div>
  </div>
</template>

<script lang="ts">
import VLazyImage from "v-lazy-image";
import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table';

import { Component, Vue } from "vue-property-decorator";
import ApiDataBase from "./../../../shared/database/index";
import firebase from "firebase/app";

@Component({
  components: {
      VueGoodTable
  },
  name: "AdminOrdersPageComponent"
})
export default class AdminOrdersPageComponent extends Vue {

  private apiDB: any = new ApiDataBase();
  private db: any = {};
  private inVoices: string[] = [];
  private queue: any[] = [];


    private ORDER_STATE = 'IN PROCESS: PAYMENT SUCCESSFULL';

    public columns: any = [
        {
          label: 'Ref',
          field: 'ref',
        },
        {
          label: 'Email',
          field: 'email',
          type: 'string',
        },
        {
          label: 'Telefóno',
          field: 'phone',
          type: 'string',
        },
        {
          label: 'Producto',
          field: 'product',
          type: 'string',
        },
        {
          label: 'Foto',
          field: 'photo',
          html: true,
        },
        {
          label: 'InVoice',
          field: 'invoice',
          html: true,
        },
        {
          label: 'Fecha Compra',
          field: 'createdAt',
          type: 'date',
          dateInputFormat: 'dd-MM-yyyy',
          dateOutputFormat: 'dd/MM/yyyy',
        }
      ];
    public rows: any =  [
        {
            ref: 'REF_OERFEF_eRF',
            email: 'wallamejorge@hotmail.com',
            phone: '300531837',
            product: 'BOTAS NEGRAS',
            photo: '<img style="width:50px" src="https://firebasestorage.googleapis.com/v0/b/trianon-co-pwa-dev.appspot.com/o/Shop-Products-Photos%2Fhd%2FHR156-01-01.jpg?alt=media&token=c392cfe1-c92e-4bb8-97f1-cf815a641f01">',
            invoice : '<a href="https://firebasestorage.googleapis.com/v0/b/trianon-co-pwa-dev.appspot.com/o/Shop-InVoices%2F07f3518fcbc0d26abd6ec782d01a827b.pdf?alt=media&token=f0f2ab54-4e49-4d22-9e79-ab18233e4af7" download="w3logo"> DESCARGAR </a>'
        },
         {
            ref: 'REF_OERFEF_eRF',
            email: 'wallamejorge@hotmail.com',
            phone: '300531837',
            product: 'BOTAS NEGRAS',
            photo: '<img style="width:50px" src="https://firebasestorage.googleapis.com/v0/b/trianon-co-pwa-dev.appspot.com/o/Shop-Products-Photos%2Fhd%2FHR156-01-01.jpg?alt=media&token=c392cfe1-c92e-4bb8-97f1-cf815a641f01">',
            invoice : '<a href="https://firebasestorage.googleapis.com/v0/b/trianon-co-pwa-dev.appspot.com/o/Shop-InVoices%2F07f3518fcbc0d26abd6ec782d01a827b.pdf?alt=media&token=f0f2ab54-4e49-4d22-9e79-ab18233e4af7" download="w3logo"> DESCARGAR </a>'
        },
         {
            ref: 'REF_OERFEF_eRF',
            email: 'wallamejorge@hotmail.com',
            phone: '300531837',
            product: 'BOTAS NEGRAS',
            photo: '<img style="width:50px" src="https://firebasestorage.googleapis.com/v0/b/trianon-co-pwa-dev.appspot.com/o/Shop-Products-Photos%2Fhd%2FHR156-01-01.jpg?alt=media&token=c392cfe1-c92e-4bb8-97f1-cf815a641f01">',
            invoice : '<a href="https://firebasestorage.googleapis.com/v0/b/trianon-co-pwa-dev.appspot.com/o/Shop-InVoices%2F07f3518fcbc0d26abd6ec782d01a827b.pdf?alt=media&token=f0f2ab54-4e49-4d22-9e79-ab18233e4af7" download="w3logo"> DESCARGAR </a>'
        }
      ];

    private beforeMount() {
          const db = firebase.firestore();
          this.queue = [];

          db.collection("SHOPPING_HISTORY")
          .get()
          .then((querySnapshot: any) => {
            querySnapshot.forEach((doc: any) => {
              const doc_data = doc.data();
              let doc_date = doc_data.meta.createdAt.toDate();
              let day = doc_date.getDate()
              let month = doc_date.getMonth() + 1
              let year = doc_date.getFullYear();
              if(month < 10){
                doc_date = (`${day}-0${month}-${year}`);
              }else{
                doc_date = (`${day}-${month}-${year}`);
              }

              const doc_queue = {
                ref: doc_data.ref,
                email: doc_data.shipping.email,
                phone: doc_data.shipping.phone,
                product: doc_data.products[0].description ,
                createdAt: doc_date,
                photo: `<img style="width:50px" src="https://firebasestorage.googleapis.com/v0/b/trianon-co-pwa-dev.appspot.com/o/Shop-Products-Photos%2Fhd%2F${decodeURI(doc_data.ref).replace(' ','')}-01.jpg?alt=media&token=c392cfe1-c92e-4bb8-97f1-cf815a641f01">`,
            invoice : `<a href="https://firebasestorage.googleapis.com/v0/b/trianon-co-pwa-dev.appspot.com/o/Shop-InVoices%2F${doc_data.ID}.pdf?alt=media&token=f0f2ab54-4e49-4d22-9e79-ab18233e4af7" download="${doc_data.ID}" target="_blank"> DESCARGAR </a>`
              }
              console.warn(doc_data)
              if(doc_data.state === this.ORDER_STATE){              this.queue.push(doc_queue);
}

            });
          });

      }


      private mount(){

      }

      public selectionChanged($event:any){
        const selected = $event.selectedRows;
        console.error(selected)
        const pdfs = selected.map((shopOrder:any) => shopOrder.invoice.replace('<a href="','').replace('" download="w3logo"> DESCARGAR </a>'))
        console.warn('')
        console.warn(pdfs)
        this.inVoices = pdfs;
      }

      public downloadInvoices():void{
          const urls = this.inVoices;
          var fileURL = "https://cdn.sstatic.net/clc/img/jobs/bg-remote-header-sm.png";
          var fileName = "test.pdf";
          this.download_file(fileURL, fileName); // fix function name
      }
    
download_file(fileURL:string, fileName:string) {
  var link = document.createElement('a');
  link.href = fileURL;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}





}
</script>

<style lang="less">
</style>