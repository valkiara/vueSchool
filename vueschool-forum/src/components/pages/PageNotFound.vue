<template>
<div class="col-full" :class="$style.centered">
    <h1 :class="$style.headingLarge">Not Found</h1>
    <p :class="$style.textLarge">ნახუი 
        <router-link :to="{name: 'Home'}">
            ჰოუმ პეიჯზე
        </router-link>
    </p>
</div>
    
</template>
<script>
  export default {
    created () {
      this.$emit('ready')
    }
  }
</script>
<style module>
.headingLarge{
  font-size: 100px;
}
.textLarge{
  font-size: 50px;
  font-weight: 100;
}
.centered{
  text-align: center;
}

</style>
