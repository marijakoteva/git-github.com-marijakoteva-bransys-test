<template>
    <div>
      <b-modal id="modal-1"  hide-footer="" title="Vehicle Data">
        <p class="my-4">Vehicle Name: <span class="float-right">{{form.vName}}</span> </p>
        <p class="my-4">Vehicle Type: <span class="float-right">{{form.vType}}</span></p>
        <p class="my-4">Vehicle Model: <span class="float-right">{{form.model}}</span></p>
        <p class="my-4">Licence Plate: <span class="float-right">{{form.lPlate}}</span></p>
        <p class="my-4">Last Registration Date: <span class="float-right">{{form.rDate}}</span></p>
        <p class="my-4">Date of registration submission: <span class="float-right">{{form.sDate}}</span></p>
        <b-button class="btn-primary" block @click="$bvModal.hide('modal-1')">Close Me</b-button>
      </b-modal>
    </div>
</template>
<script>
export default {
  name: "Modal",
  props: ['form']

};
</script>


<style scoped lang="scss">

</style>
