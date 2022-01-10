<script>
  import {
    isConnect,
    isHolder,
    myAddressShort,
    paperV1TotalSupplyNum,
    imgLink,
    spiner,
    saleInfo,
  } from '@/stores'
  import Connect from '@/components/Connect/index.svelte'
  import MintButton from './mint.svelte'
  import { Circle3 } from 'svelte-loading-spinners'
</script>

<div class="wrap">
  <div class="form">
    <div class="form-title">Mint Paper Children</div>
    <div class="random-img-wrap">
      <img class="random-img" src={$imgLink} alt="random" />
      {#if $spiner}
        <div class="spiner">
          <Circle3 size="60" unit="px" duration="1s" />
        </div>
      {/if}
    </div>
    <div class="text">Mint Price: 50 klay</div>
    <div class="text">Mint Situation: {$paperV1TotalSupplyNum} / 1004</div>
    <div class="text">
      Address: {$myAddressShort}
    </div>
    {#if $isConnect && !$isHolder}
      <MintButton />
    {:else if $isConnect && $isHolder}
      <div class="thanks">Thanks your participate</div>
    {:else if !$saleInfo}
      <div class="isSale">Open at 8 p.m. on January 12, 2022</div>
    {:else}
      <Connect />
    {/if}
    <div class="link">
      <a href="https://opensea.io/collection/paper-children" target="_blank">Opensea Collection</a>
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

  .isSale {
    font-size: 1.5rem;
    font-family: 'DK Cool Crayon Font';
    margin-bottom: 20px;
    color: blue;
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

  .spiner {
    z-index: 100;
    position: absolute;
    top: 0px;
    left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background: rgba(0, 0, 0, 0.6); */
    width: 100%;
    height: 100vh;
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

    .isSale {
      font-size: 0.9rem;
      font-family: 'DK Cool Crayon Font';
      margin-bottom: 20px;
      color: blue;
    }
  }
</style>
