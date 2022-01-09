<script lang="ts">
  import Main from '@/pages/Main.svelte'
</script>

<div class="wrap">
  <Main />
</div>

<style lang="scss">
  .wrap {
    max-width: 1280px;
    margin: 0px auto;
  }

  @media screen and (max-width: 768px) {
    .wrap {
      margin: 0px 0px;
    }
  }
</style>
