<script>
  import { isConnect, myAddress, myAddressShort, klaytn, caver } from '@/stores'
  // import paperABI from '@/abi/paper'

  // const myContract = new window.caver.klay.Contract(
  //   paperABI,
  //   '0x40944C9Da1707B3892Ad16FC7944d3C463a947F0'
  // )

  if (window.klaytn) {
    window.klaytn.on('accountsChanged', function () {
      connect()
    })
  }

  function connect() {
    console.log()
    if (window.klaytn === undefined) {
      alert("There's no Kaikas. Please install Kaikas wallet.")
      return
    }
    $klaytn = window.klaytn
    $caver = window.caver
    $klaytn.enable().then(() => {
      $isConnect = true
      $myAddress = $klaytn.selectedAddress
      $myAddressShort = `${$myAddress.slice(0, 6)}...${$myAddress.slice(-4)}`
    })
    // const test = await contract.mint('0x40944C9Da1707B3892Ad16FC7944d3C463a947F0', '4')
    // console.log(test)
    // myContract.methods
    //   .mint(window.klaytn.selectedAddress, '4')
    //   .estimateGas({ from: window.klaytn.selectedAddress })
    //   .then((data) => {
    //     myContract.methods
    //       .mint(window.klaytn.selectedAddress, '4')
    //       .send({ from: window.klaytn.selectedAddress, gas: data })
    //   })
  }
</script>

<div class="wallet-btn" on:click={connect}>Wallet Connect</div>

<style lang="scss">
  .wallet-btn {
    font-size: 2.5rem;
    font-family: 'Colored Crayons';
    cursor: pointer;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 768px) {
    .wallet-btn {
      font-size: 1.5rem;
      font-family: 'Colored Crayons';
      cursor: pointer;
      margin-bottom: 30px;
    }
  }
</style>
