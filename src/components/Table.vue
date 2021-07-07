<template>
  <div class="container mt-4">
         <div class="row">
                      <div class="container h-100">
                          <div class="row h-100 justify-content-center align-items-center">
                              <div class="col-10 col-md-8 col-lg-6">
                                  <div class="search-wrapper panel-heading col-sm-12">
                                      <input class="form-control" type="text" v-model="searchQuery" placeholder="" />
                                  </div>  
                              </div>
                          </div>
                      </div>                                           
                  </div>
                <br>    
    <table class="table table-bordered mt-4">
      <thead >
        <tr>          
          <th>Vehicle name</th>
          <th>Vehicle type</th>
          <th>Model</th>
          <th>License plate number</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in filteredResources" :key="index">
          
          <td>
            <span v-if="editIndex !== index">{{ item.vehicleName }}</span>
            <span v-if="editIndex === index">
              <input class="form-control form-control-sm" v-model="item.vehicleName">
            </span>
          </td>
          <td>
            <span v-if="editIndex !== index">{{ item.vehicleType }}</span>
            <span v-if="editIndex === index">
              <input class="form-control form-control-sm" v-model="item.vehicleType">
            </span>
          </td>
          <td>
            <span v-if="editIndex !== index">{{ item.model }}</span>
            <span v-if="editIndex === index">
              <input class="form-control form-control-sm" v-model="item.model">
            </span>
          </td>
          <td>
            <span v-if="editIndex !== index">{{ item.plateNumber }}</span>
            <span v-if="editIndex === index">
              <input class="form-control form-control-sm"  v-model.number="item.plateNumber" v-mask="`AA-####-AA`">
            </span>
          </td>
          
            <span v-if="editIndex !== index">
              <button @click="edit(item, index)" class="btn btn-sm btn-vue mr-2">Edit</button>
              <button @click="remove(item, index)" class="btn btn-sm btn-secondary mr-2">Remove</button>
            </span>
            <span v-else>
              <button class="btn btn-sm btn-outline-secondary mr-2" @click="cancel(item)">Cancel</button>
              <button class="btn btn-sm btn-outline-secondary mr-2" @click="save(item)">Save</button>
            </span>
          
        </tr>
      </tbody>
    </table>

    <div class="col-3 offset-9 text-right my-3">
      <button v-show="!editIndex" @click="add" class="btn btn-sm btn-secondary">Add item</button>
    </div>

  </div>
</template>

<script>
import json from './../data/vehicles.json'
export default {
  data() {
    return {
      editIndex: null,
      originalData: null,
      items: json,
      searchQuery:'',
    }
  },
  methods: {

    add() {
      this.originalData = null
      this.items.push({ vehicleName: '', vehicleType: '', model: '', plateNumber: '' })
      this.editIndex = this.items.length - 1
    },

    edit(item, index) {
      this.originalData = Object.assign({}, item)
      this.editIndex = index
    },

    cancel(item) {
      this.editIndex = null

      if (!this.originalData) {
        this.items.splice(this.items.indexOf(item), 1)
        return
      }

      Object.assign(item, this.originalData)
      this.originalData = null
    },

    remove(item) {
      this.items.splice(this.items.indexOf(item), 1)
    },

    save() {
      this.originalData = null
      this.editIndex = null
    },

  },

  computed: {
        filteredResources (){
      if(this.searchQuery){
      return this.items.filter((item)=>{
        return item.vehicleName.toLowerCase().includes(this.searchQuery.toLowerCase())||
        item.vehicleType.toLowerCase().includes(this.searchQuery.toLowerCase())||
        item.model.toLowerCase().includes(this.searchQuery.toLowerCase())||item.plateNumber.toLowerCase().includes(this.searchQuery.toLowerCase());
      })
      }else{
        return this.items;
      }
    },

  },
  

}
</script>
