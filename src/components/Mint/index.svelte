<script lang="ts">
  import { isConnect, myAddressShort } from '@/stores'
  import Connect from '@/components/Connect/index.svelte'
  import MintButton from './mint.svelte'
</script>

<div class="wrap">
  <div class="form">
    <div class="form-title">Mint Paper Children</div>
    <div class="random-img-wrap">
      <img class="random-img" src="/assets/random.png" alt="random" />
    </div>
    <div class="text">Mint Situation: 0 / 1004</div>
    <div class="text">
      Address:
      {#if $isConnect}
        {$myAddressShort}
      {:else}
        0x0000...0000
      {/if}
    </div>
    {#if $isConnect && !true}
      <MintButton />
    {:else if $isConnect && true}
      <div class="thanks">Thanks your participate</div>
    {:else}
      <Connect />
    {/if}
    <div class="link">
      <a href="https://paperchildren.net/" target="_blank">Opensea Collection</a>
    </div>
  </div>
</div>

<style lang="scss">
  .wrap {
    display: flex;
    justify-content: center;
    /* color: white; */
    height: 90vh;
  }

  .form {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 90%;
    background-image: url('/assets/background.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    overflow: scroll;
  }

  .form-title {
    font-size: 2rem;
    font-family: 'Colored Crayons';
  }

  .random-img-wrap {
    width: 30%;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .random-img {
    width: 100%;
    border-radius: 20px;
  }

  .text {
    font-size: 1.5rem;
    font-family: 'DK Cool Crayon Font';
    margin-bottom: 20px;
  }

  .thanks {
    font-size: 2.2rem;
    font-family: 'Colored Crayons';
    margin-bottom: 30px;
    color: darkorchid;
  }

  .link {
    a {
      font-size: 1.1rem;
      font-family: 'Colored Crayons';
      color: black;
    }
  }

  @media screen and (max-width: 768px) {
    .wrap {
      display: flex;
      justify-content: center;
      /* color: white; */
      height: 90vh;
    }
    .form {
      display: flex;
      padding: 20px;
      box-sizing: border-box;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 80%;
      height: 90%;
      background-image: url('/assets/background.png');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      overflow: scroll;
    }

    .form-title {
      font-size: 1.7rem;
    }

    .random-img-wrap {
      width: 50%;
    }

    .text {
      font-size: 1.2rem;
      font-family: 'DK Cool Crayon Font';
      margin-bottom: 30px;
    }

    .thanks {
      font-size: 1.8rem;
      font-family: 'Colored Crayons';
      margin-bottom: 30px;
      color: darkorchid;
    }
  }
</style>
