<script setup>
import { ref } from 'vue';

// Refer to https://vuejs.org/guide/components/v-model.html
defineProps({
  modelValue: {
    type: String,
    required: true
  },
  bgColor: {
    type: String,
    default: 'primary'
  },
  placeholder: {
    type: String,
    default: 'Please enter a note...'
  },
});
defineEmits(['update:modelValue', 'handleSubmit']);
defineExpose({
  focusTextArea
});

const noteContentRef = ref(null);

// Focus textarea
function focusTextArea() {
  noteContentRef.value.focus();
}
</script>

<template>
  <form class="card mb-4 p-4"
        :class="`has-background-${bgColor}-dark`"
        @submit.prevent="$emit('handleSubmit')">
    <div class="field">
      <label class="label has-text-white">Note Content</label>
      <div class="control">
        <textarea :value="modelValue"
                  ref="noteContentRef"
                  class="textarea"
                  :placeholder="placeholder"
                  @input="$emit('update:modelValue', $event.target.value)" />
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons" />
      </div>
    </div>
  </form>
</template>