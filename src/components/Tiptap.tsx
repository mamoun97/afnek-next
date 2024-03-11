"use client"
import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import {
  Content,
  EditorEvents,
  EditorProvider,
  Extensions,
  useCurrentEditor,
} from "@tiptap/react";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import StarterKit from "@tiptap/starter-kit";
import Highlight from "@tiptap/extension-highlight";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import HardBreak from "@tiptap/extension-hard-break";

import { RiEditLine, RiCodeLine } from "react-icons/ri";
import {
  FaBold,
  FaItalic,
  FaStrikethrough,
  FaUnderline,
  FaParagraph
} from "react-icons/fa";
import {
  BsTypeH1,
  BsTypeH2
} from "react-icons/bs";

const MenuBar = () => {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }

  return (
    <div className="flex items-center flex-wrap gap-3 border-1 rounded-t-lg  p-2 text-xl text-gray-400 dark:bg-pink-500">
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "is-active" : ""}
      >
        <FaBold />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "is-active" : ""}
      >
        <FaItalic />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={editor.isActive("strike") ? "is-active" : ""}
      >
        <FaStrikethrough />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        disabled={!editor.can().chain().focus().toggleUnderline().run()}
        className={editor.isActive("underline") ? "is-active" : ""}
      >
        <FaUnderline />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        disabled={!editor.can().chain().focus().toggleHighlight().run()}
        className={editor.isActive("highlight") ? "is-active" : ""}
      >
        <RiEditLine />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={editor.isActive("code") ? "is-active" : ""}
      >
        <RiCodeLine />
      </button>
      <div className="h-6 w-[1px] bg-gray-600"></div>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive("heading", { level: 1 }) ? "is-active" : ""}
      >
        <BsTypeH1 />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
      >
        <BsTypeH2 />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive("paragraph") ? "is-active" : ""}
      >
        <FaParagraph />
      </button>
      {/* <div className="h-6 w-[1px] bg-gray-600"></div>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive("buletList") ? "is-active" : ""}
      >
        <i className="ri-list-unordered"></i>
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive("orderedList") ? "is-active" : ""}
      >
        <i className="ri-list-ordered"></i>
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleTaskList().run()}
        className={editor.isActive("orderedList") ? "is-active" : ""}
      >
        <i className="ri-list-check-3"></i>
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive("codeBlock") ? "is-active" : ""}
      >
        <i className="ri-code-box-line"></i>
      </button>
      <div className="h-6 w-[1px] bg-gray-600"></div>
      <button
        type="button"
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        className={editor.isActive({ TextAlign: "left" }) ? "is-active" : ""}
      >
        <i className="ri-align-left"></i>
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        className={editor.isActive({ TextAlign: "center" }) ? "is-active" : ""}
      >
        <i className="ri-align-center"></i>
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        className={editor.isActive({ TextAlign: "right" }) ? "is-active" : ""}
      >
        <i className="ri-align-right"></i>
      </button>
      <div className="h-6 w-[1px] bg-gray-600"></div>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive("blockquote") ? "is-active" : ""}
      >
        <i className="ri-double-quotes-l"></i>
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        className={editor.isActive("blockquote") ? "is-active" : ""}
      >
        <i className="ri-separator"></i>
      </button>
      <div className="h-6 w-[1px] bg-gray-600"></div>
      <button
        type="button"
        onClick={() => editor.chain().focus().setHardBreak().run()}
        className={editor.isActive("blockquote") ? "is-active" : ""}
      >
        <i className="ri-text-wrap"></i>
      </button>
      <div className="h-6 w-[1px] bg-gray-600"></div>
      <button
        type="button"
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
      >
        <i className="ri-arrow-go-back-line"></i>
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
      >
        <i className="ri-arrow-go-forward-line"></i>
      </button> */}
    </div>
  );
};

const extensions:Extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ HTMLAttributes: [ListItem.name] }),
  TextAlign.configure({ types: [ListItem.name] }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    codeBlock: {
      HTMLAttributes: {
        class: 'bg-black text-white p-2 rounded-lg '
      }
    },
    code: {
      HTMLAttributes: {
        class: 'bg-gray-100 text-gray-700 p-2 rounded-lg '
      }
    }
  }),
  Underline,
  Highlight.configure({
    HTMLAttributes: {
      class: "",
    },
  }),
  TaskList.configure({
    HTMLAttributes: {
      class: "",
    },
  }),
  TaskItem.configure({
    nested: true,
  }),
  HorizontalRule.configure({
    HTMLAttributes: {
      class: "",
    },
  }),
  HardBreak.configure({
    HTMLAttributes: {
      class: "",
    },
  }),
];

const editorProps = {
  attributes: {
    class: "border-gray-100 border-1 rounded-b-lg outline-none p-5 h-56 overflow-y-auto",
  },
};

export default function TipTap(
  { content, onUpdate }: {
    content: Content;
    onUpdate: (props: EditorEvents["update"]) => void;
  },
) {
  return (
    <div className="bg-gray-50 border-1 border-gray-300 p-1 ">
      {/* <EditorProvider
        slotBefore={<MenuBar />}
        extensions={extensions}
        content={content}
        editorProps={editorProps}
        onUpdate={onUpdate}


      >
      </EditorProvider> */}
    </div>
  );
}
