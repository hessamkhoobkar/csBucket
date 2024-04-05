<script setup lang="ts">
import { ref } from "vue";

const isVisible = ref(false);

function handleModalCall() {
  isVisible.value = !isVisible.value;
}
</script>

<template>
  <button @click="handleModalCall">Call modal</button>

  <Transition>
    <div v-if="isVisible" class="modal modal-bg">
      <div v-if="isVisible" class="modal modal-card">
        <h2>Hello world!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde est
          harum magnam? Quas et id maxime eveniet suscipit asperiores qui ipsum
          voluptatum corporis quidem, blanditiis iusto eligendi molestiae nihil
          excepturi.
        </p>
        <button @click="handleModalCall">Close modal</button>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal-bg {
  position: fixed;
  inset: 0;
  background: #000000a3;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-card {
  background: #1a1a1b;
  max-width: 80%;
  border-radius: 0.5rem;
  padding: 4rem;

  button {
    background: rgb(74, 20, 133);
  }
  button:hover {
    background: rgb(105, 11, 204);
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
