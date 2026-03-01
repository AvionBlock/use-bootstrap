<template>
 <editor-content
  :editor="editor"
  :class="{ ...classObject }"
 />
</template>

<script setup>
import { useEditor, EditorContent } from "@tiptap/vue-3";
import TiptapStarterKit from "@tiptap/starter-kit";
import { useStateComponent, StateComponentProps } from "../../../composables/view-state/useState/useStateComponent";
import { unref, computed, watch } from "#imports";
const model = defineModel({ type: Array });
const props = defineProps({
  ...StateComponentProps,
  command: {
    // 変化させてコマンドを実行します
    type: Object
  }
});
const content = computed(() => {
  return {
    type: "doc",
    content: unref(model)
  };
});
const { updateValue, classObject } = useStateComponent(props, model);
const editor = useEditor({
  extensions: [
    TiptapStarterKit
  ],
  content: unref(content),
  onUpdate({ editor: editor2 }) {
    model.value = editor2.getJSON().content || [];
    updateValue(model.value);
  },
  onCreate({ editor: editor2 }) {
    const endPos = editor2.state.doc.content.size;
    editor2.commands.setTextSelection(endPos);
  }
});
const toggleBold = () => {
  editor.value?.chain().focus().toggleBold().run();
};
const toggleItalic = () => {
  editor.value?.chain().focus().toggleItalic().run();
};
watch(() => props.command, (newCommand) => {
  switch (newCommand?.name) {
    case "toggleBold":
      toggleBold();
      break;
    case "toggleItalic":
      toggleItalic();
      break;
  }
});
</script>
