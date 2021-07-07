<template>
    <div>
        <div>
            <form @submit.prevent="submitForm">
                <div >
                                   
                    <div class="">
                        <label class="col-form-label col-form-label-lg">Vehicle Name <span class="text-danger">*</span></label>
                        <input type="text" class="form-control"
                        v-model.trim="$v.form.vName.$model" :class="{
                            'is-invalid':$v.form.vName.$error, 'is-valid': !$v.form.vName.$invalid}">
                            <div class="valid-feedback" >Your vehicle name is valid!</div>
                            <div class="invalid-feedback">
                                <span v-if="!$v.form.vName.required" >First name is required</span>                                
                                <span v-if="!$v.form.vName.maxLength" >Maximum {{$v.form.vName.$params.maxLength.max}} characters. E.g. Company vehicle 22</span>
                            </div>
                    </div>
                        
                    <div>
                        <label class="col-form-label col-form-label-lg">Vehicle Type: <span class="text-danger">*</span></label>                    
                        <b-form-select  type="text" class="form-control"
                        :options="VehicleTypes"
                        v-model.trim="$v.form.vType.$model" :class="{
                             'is-invalid':$v.form.vType.$error, 'is-valid': !$v.form.vType.$invalid}"></b-form-select >    
                            <div class="valid-feedback" >Your vehicle type is valid!</div>
                            <div class="invalid-feedback">
                                <span v-if="!$v.form.vType.required" >Vehicle type is required</span>                                
                            </div>
                    </div>
                       
                    <div>
                        <label class="col-form-label col-form-label-lg">Vehicle Model:</label>                    
                        <b-form-input list="my-list-id" v-model="form.model"  ></b-form-input>
                            <datalist id="my-list-id"  >
                                <option   v-for="model in Models" :key="model"  >
                                    {{ model }}
                                    </option>
                            </datalist>                               
                    </div>

                     <!-- Licence Plate Number Input Field -->  
                    <div>
                        <label class="col-form-label col-form-label-lg">Licence Plate Number: <span class="text-danger">*</span></label>                        
                        <b-input  type="text" class="form-control"                        
                        v-model.trim="$v.form.lPlate.$model"   v-mask="`AA-####-AA`" :class="{
                             'is-invalid':$v.form.lPlate.$error, 'is-valid': !$v.form.lPlate.$invalid}"></b-input >    
                            <div class="valid-feedback" >Your license plate type is valid!</div>
                            <div class="invalid-feedback">
                                <span v-if="!$v.form.lPlate.required" >License plate is required</span>  
                                <span v-if="!$v.form.vName.minLength" > License plate must be completed  </span>                              
                            </div>
                    </div>

                     
                    <div>
                        <label class="col-form-label col-form-label-lg">Last Registration Date: <span class="text-danger">*</span></label>            
                        <b-form-datepicker  type="text" class="form-control"                        
                        v-model.trim="$v.form.rDate.$model"  :v-bind="form.rDate"  :max="max" locale="en" :class="{
                             'is-invalid':$v.form.rDate.$error, 'is-valid': !$v.form.rDate.$invalid}"></b-form-datepicker >    
                            <div class="valid-feedback" >Your Last Registration Date is valid!</div>
                            <div class="invalid-feedback">
                                <span v-if="!$v.form.rDate.required" >Last Registration Date is required</span>                            
                            </div>
                    </div>

                    
                    <div>
                        <label class="col-form-label col-form-label-lg">Date of registration submition: <span class="text-danger">*</span></label>             
                        <b-form-datepicker disabledDate:this.disabledDueDate :min="minDatex"   type="text" class="form-control"                        
                        v-model.trim="$v.form.sDate.$model"    locale="en" :class="{
                             'is-invalid':$v.form.sDate.$error, 'is-valid': !$v.form.sDate.$invalid}"></b-form-datepicker >    
                            <div class="valid-feedback" >Your Last Registration Date is valid!</div>
                            <div class="invalid-feedback">
                                <span v-if="!$v.form.sDate.required" >Last Registration Date is required</span>                            
                            </div>
                            <p>{{form.sDate}}</p>
                    </div>
                        <hr>  

                <button type="submit" class="btn btn-vue btn-lg col-4" :disabled="$v.$invalid" v-b-modal.modal-1 >Submit </button>

                </div>
            </form>
        </div>
        <Modal :form="form" />
        
        
    </div>
</template>
<script>
import  {required, maxLength, minLength} from 'vuelidate/lib/validators'
import Modal from "@/components/Modal.vue"
export default {
    name: 'Form',
    data() {
         const now = new Date()
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
      // 15th two months prior
      const minDate = new Date(today)
      minDate.setMonth(minDate.getMonth() - 12)
      minDate.setDate(15)
      // 15th in two months
      const maxDate = new Date(today)
      const today1=today.toISOString().slice(0,10).replace(/-/g,"-");
        return {
            form:{
                vName: '',
                vType: '',
                model: '',
                lPlate: '',
                rDate: '',
                sDate: today1 
            },           
            min: minDate,
            max: maxDate,
            submitionstaus: '',
             VehicleTypes: [{ text: 'Select One', value: null }, 'Car', 'Van', 'Truck', 'Container', 'Trailer', 'Dupmer','Motorcycles'],
             Models: ['Audi', 'BMW', 'Citroen', 'Honda', 'Hyundai', 'Mercedes', 'Ferrari','Opel', 'Rolls-Royce', 'Bugatti', 'Tesla']
        }
        
    },
    computed:{
        minDatex(){
            return this.form.rDate;
        }
    },
    components:{
        Modal
    },
    validations: {
        form:{

        vName:{
            required,            
            maxLength: maxLength(50)
        },
        vType:{
            required
        },
        lPlate: {
            required,
            minLength: minLength(10)
        },
        rDate: {
            required
        },
        sDate: {
            required,
        },

        }

     
    },
    methods: {
        submitForm(e){
            e.preventDefault();
            this.$v.$touch()
            if(this.model=='')
            this.model="Unknown"
                   if(this.form.model==''){
                this.form.model="Unknown"
            }
           
        },
    }
}
</script>
