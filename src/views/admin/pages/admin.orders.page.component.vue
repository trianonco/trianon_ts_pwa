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
                :select-options="{ enabled: false }"
                :columns="columns"
                :rows="queue">
                <div slot="selected-row-actions">
                  <button style="display:block" @click="downloadInvoices()"> Descargar InVoices </button>
                </div>
                <div slot="selected-row-actions">
                  <button style="display:block" @click="deleteOrder()"> Borrar </button>
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


const payOnClick= (id: any)=> `

    const api = 'https://us-central1-trianon-co-pwa-dev.cloudfunctions.net/HandleUpdateInBuy?ID=${id}';

    fetch(api)
    .then(function(response) {
      const res = JSON.stringify(response.json());
      location.reload();
    })
    .catch(function(error) {
      window.alert('ERROR')
    });
    
  
`;

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
  private orders:  any[] = []


    private ORDER_STATE = 'IN PROCESS: PAYMENT SUCCESSFULL';

    public columns: any = [
       {
          label: 'Pago',
          field: 'payment',
          html: true,
        },
        {
          label: 'Fecha Compra',
          field: 'createdAt',
          type: 'date',
          dateInputFormat: 'dd-MM-yyyy',
          dateOutputFormat: 'dd/MM/yyyy',
        },
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
          label: 'Delete',
          field: 'delete',
          html: true,
        }
      ];
    public rows: any =  [
        {
            ref: 'REF_OERFEF_eRF',
            email: 'wallamejorge@hotmail.com',
            phone: '300531837',
            product: 'BOTAS NEGRAS',
            photo: '<img style="width:50px" src="https://firebasestorage.googleapis.com/v0/b/trianon-co-pwa-dev.appspot.com/o/Shop-Products-Photos%2Fhd%2FHR156-01-01.jpg?alt=media&token=c392cfe1-c92e-4bb8-97f1-cf815a641f01">',
            invoice : '<a href="https://firebasestorage.googleapis.com/v0/b/trianon-co-pwa-dev.appspot.com/o/Shop-InVoices%2F07f3518fcbc0d26abd6ec782d01a827b.pdf?alt=media&token=f0f2ab54-4e49-4d22-9e79-ab18233e4af7" download="w3logo"> DESCARGAR </a>',
            delete : '<a href="https://firebasestorage.googleapis.com/v0/b/trianon-co-pwa-dev.appspot.com/o/Shop-InVoices%2F07f3518fcbc0d26abd6ec782d01a827b.pdf?alt=media&token=f0f2ab54-4e49-4d22-9e79-ab18233e4af7" download="w3logo"> BORRAR </a>'
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

              const refs = doc_data.products.map((product:any) => product.ref).reduce((accumulator: any, currentValue: any) => accumulator + ' ' + currentValue, '');
              const photos =  doc_data.products.map((product:any) => product.ref_photo_code).reduce((accumulator: any, currentValue: any) =>  
                 ' <br> ' + 
                 `<img style="width:50px" src="https://firebasestorage.googleapis.com/v0/b/trianon-co-pwa-dev.appspot.com/o/Shop-Products-Photos%2Fhd%2F${decodeURI(currentValue).replace(' ','')}-01.jpg?alt=media&token=c392cfe1-c92e-4bb8-97f1-cf815a641f01">` + 
                 accumulator + ' <br> '
              , '');
              const products = doc_data.products.map((product:any) => product.description).reduce((accumulator: any, currentValue: any) => accumulator + ' ' + currentValue);
              const doc_queue = {
                id: doc_data.id,
                ref: refs,
                email: doc_data.shipping.email,
                phone: doc_data.shipping.phone,
                product: products,
                createdAt: doc_date,
                payment: `

                      ${doc_data.state === 'IN PROCESS: WATING FOR PAYMENT' ? '<div class="payment-button" onclick="' + payOnClick(doc_data.ID) +'">CONFIRMAR</div>' : ''}
                      ${doc_data.state !== 'IN PROCESS: WATING FOR PAYMENT' ? '<div class="payment-label">PAGO CONFIRMADO</div>' : ''}
                      
                `,
                photo: photos,
                delete : `<a href="https://firebasestorage.googleapis.com/v0/b/trianon-co-pwa-dev.appspot.com/o/Shop-InVoices%2F${doc_data.ID}.pdf?alt=media&token=f0f2ab54-4e49-4d22-9e79-ab18233e4af7"${doc_data.ID}"  target="_blank"> BORRAR </a>`,
                invoice : `<a href="https://firebasestorage.googleapis.com/v0/b/trianon-co-pwa-dev.appspot.com/o/Shop-InVoices%2F${doc_data.ID}.pdf?alt=media&token=f0f2ab54-4e49-4d22-9e79-ab18233e4af7" download="${doc_data.ID}" target="_blank"> DESCARGAR </a>`
              }
              if(doc_data.state ==='IN PROCESS: PAYMENT SUCCESSFULL' || doc_data.state === 'IN PROCESS: IN FACTORY' || doc_data.state === 'IN PROCESS: WATING FOR PAYMENT'){              
               this.queue.push(doc_queue);
               console.warn(doc_queue)
               }
               this.orders.push(doc_data);
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
table.vgt-table.bordered {
    font-family: 'Open Sans' !important;
    font-display: block;
    font-weight: normal;
    font-style: normal;
    font-size: 12px;
}
.payment-label{
    margin: 1em auto;
    display: block;
    text-align: center;
}
.payment-button{
    margin: 1em auto;
    display: block;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    padding: 1em;
    border-radius: 1em;
    background: #50a950;
    color: white;
    letter-spacing: 1px;
    font-weight: 400;
    cursor: pointer;

    &:hover{
      background: #3e7c3e;
    }
}
</style>