<template>
  <div class="chat">
    <div class="chat-wrapper">
      <img class="chat-icon" src="./../../../assets/chat-icon.png">
      <div class="chat-buget" style="display:none">
        <span>2</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeChatComponent"
};
</script>

<style lang="less">
@import (reference) "./../../../styles/index.less";

div.chat {
  position: fixed;
  bottom: 2vh;
  right: 0.75em;
  z-index: 1000;

  width: 2.25em;
  height: 2.25em;

  div.chat-wrapper {
    position: relative;
  }

  div.chat-buget {
    position: absolute;
    top: -10px;
    left: -10px;

    background: @color-yellow;
    border: 1px solid @color-yellow;
    border-radius: 100%;
    color: black;

    padding: 0.5em;

    width: 0.5em;
    height: 0.5em;

    #Flex-Col-Center-Center();
  }
  img {
    width: 2.25em;
  }
}
</style>
