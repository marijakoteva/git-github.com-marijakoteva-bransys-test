<template>
    <div class="container h-100">
        <div class="row h-100 justify-content-center align-items-center">
          <div class="col-10 col-md-8 col-lg-6">
            <Form />          
          </div>
        </div>
    </div>
</template>
<script>
import Form from "@/components/Form.vue"
export default {
  name: "VehicleEntryForm",
  components: {
    Form
  }
};
</script>
