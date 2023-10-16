//Core packages
import { createSignal, createEffect, Show, For } from "solid-js";
import createModal from "../../../Store/modal.jsx"
import createUser from "../../../Store/user.jsx"
import AddVulnerabilityModal from '../modalComponents/addVulnerabilityModal.jsx';
import VoxService from "../../../Services/apiHandler.jsx";
import history from '../../../history.jsx'
import { FaSolidChevronLeft } from 'solid-icons/fa'
import { useParams } from "@solidjs/router"
import StarterKit from "@tiptap/starter-kit";
import { createEditor, EditorContent } from "tiptap-solid";
import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'

function SourceCode() {
  const { showModal, setShowModal, setShowModalStr, showModalStr } = createModal;
  const { user } = createUser;
  
  const [vulnerability, setVulnerability] = createSignal([])
  const [editorContent, setEditorContent] = createSignal('')



  const extensions = [
    Color.configure({ types: [TextStyle.name, ListItem.name] }),
    TextStyle.configure({ types: [ListItem.name] }),
    StarterKit.configure({
      gapcursor: false,
      dropcursor: false,
      bulletList: {
        keepMarks: true,
        keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
      },
      orderedList: {
        keepMarks: true,
        keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
      },
    }),
  ]

  const editor = createEditor({
    extensions,
    content: editorContent(),
    onUpdate: ({ editor }) => {
        setEditorContent(editor.getHTML());
    },
  });

  createEffect(() => {
    const { id } = useParams();
    VoxService.getVulnerabilityById(id)
      .then((res) => {
        setVulnerability(res.data);
        setEditorContent(res.data.issue_inner)
        editor()?.commands.setContent(res.data.issue_inner)
      });
  }, []);

  const handleIssueUpdate = () => {
    console.log('test')
    console.log(editorContent())
    VoxService.updateVulnerabilityResources({
      company_id: user().read_array[0],
      issue_id: vulnerability().id,
      issue_content: editorContent(),
    })
      .then((res) => {
        console.log(res)
      })
  }

  return (
    <>
      <Show when={vulnerability().issue_name}>
        <div class="w-full internal-tables">
          <div class="no-border-bottom pl-4 internal-tables-active flex">
            <div class="text-small text-left font-bold no-border-bottom title-format cursor-pointer mt-1 p-3 pl-0 border-r" onClick={() => {history.push('/issues')}}>
              <FaSolidChevronLeft/>
            </div>
            <p class="text-small text-left font-bold title-format border-r px-6 p-3">{vulnerability().issue_name}</p>
          </div>
        </div>

        <div class="w-full internal-tables">
          <div class="pl-2 internal-tables-active flex">
            <div class="flex">
              <p class="text-xs codefend-text-red font-bold text-left title-format p-2">Published:</p>
              <p class="text-xs font-bold text-left title-format border-r px-2 p-2 pl-0">{new Date(vulnerability().created).toISOString().split('T')[0]}</p>
            </div>
            <div class="flex">
              <p class="text-xs codefend-text-red font-bold text-left title-format p-2">Author:</p>
              <p class="text-xs font-bold text-left title-format border-r pr-2 p-2 pl-0">{vulnerability().researcher.name}</p>
            </div>
            <div class="flex">
              <p class="text-xs codefend-text-red font-bold text-left title-format p-2">Risk score:</p>
              <p class="text-xs font-bold text-left title-format border-r pr-2 p-2 pl-0">{vulnerability().risk_score}</p>
            </div>
            <div class="flex">
              <p class="text-xs codefend-text-red font-bold text-left title-format p-2">Class:</p>
              <p class="text-xs font-bold text-left title-format border-r pr-2 p-2 pl-0">{vulnerability().issue_class}</p>
            </div>
          </div>
        </div>
        <div class="w-full internal-tables internal-tables-scroll editor">
          <Show when={editor()}>
            <button
              onClick={() => editor().chain().focus().toggleBold().run()}
              disabled={
                !editor().can()
                  .chain()
                  .focus()
                  .toggleBold()
                  .run()
              }
              className={editor().isActive('bold') ? 'is-active' : ''}
            >
              bold
            </button>
            <button
              onClick={() => editor().chain().focus().toggleItalic().run()}
              disabled={
                !editor().can()
                  .chain()
                  .focus()
                  .toggleItalic()
                  .run()
              }
              className={editor().isActive('italic') ? 'is-active' : ''}
            >
              italic
            </button>
            <button
              onClick={() => editor().chain().focus().toggleStrike().run()}
              disabled={
                !editor().can()
                  .chain()
                  .focus()
                  .toggleStrike()
                  .run()
              }
              className={editor().isActive('strike') ? 'is-active' : ''}
            >
              strike
            </button>
            <button
              onClick={() => editor().chain().focus().toggleCode().run()}
              disabled={
                !editor().can()
                  .chain()
                  .focus()
                  .toggleCode()
                  .run()
              }
              className={editor().isActive('code') ? 'is-active' : ''}
            >
              code
            </button>
            <button onClick={() => editor().chain().focus().unsetAllMarks().run()}>
              clear marks
            </button>
            <button onClick={() => editor().chain().focus().clearNodes().run()}>
              clear nodes
            </button>
            <button
              onClick={() => editor().chain().focus().setParagraph().run()}
              className={editor().isActive('paragraph') ? 'is-active' : ''}
            >
              paragraph
            </button>
            <button
              onClick={() => editor().chain().focus().toggleHeading({ level: 1 }).run()}
              className={editor().isActive('heading', { level: 1 }) ? 'is-active' : ''}
            >
              h1
            </button>
            <button
              onClick={() => editor().chain().focus().toggleHeading({ level: 2 }).run()}
              className={editor().isActive('heading', { level: 2 }) ? 'is-active' : ''}
            >
              h2
            </button>
            <button
              onClick={() => editor().chain().focus().toggleHeading({ level: 3 }).run()}
              className={editor().isActive('heading', { level: 3 }) ? 'is-active' : ''}
            >
              h3
            </button>
            <button
              onClick={() => editor().chain().focus().toggleHeading({ level: 4 }).run()}
              className={editor().isActive('heading', { level: 4 }) ? 'is-active' : ''}
            >
              h4
            </button>
            <button
              onClick={() => editor().chain().focus().toggleHeading({ level: 5 }).run()}
              className={editor().isActive('heading', { level: 5 }) ? 'is-active' : ''}
            >
              h5
            </button>
            <button
              onClick={() => editor().chain().focus().toggleHeading({ level: 6 }).run()}
              className={editor().isActive('heading', { level: 6 }) ? 'is-active' : ''}
            >
              h6
            </button>
            <button
              onClick={() => editor().chain().focus().toggleBulletList().run()}
              className={editor().isActive('bulletList') ? 'is-active' : ''}
            >
              bullet list
            </button>
            <button
              onClick={() => editor().chain().focus().toggleOrderedList().run()}
              className={editor().isActive('orderedList') ? 'is-active' : ''}
            >
              ordered list
            </button>
            <button
              onClick={() => editor().chain().focus().toggleCodeBlock().run()}
              className={editor().isActive('codeBlock') ? 'is-active' : ''}
            >
              code block
            </button>
            <button
              onClick={() => editor().chain().focus().toggleBlockquote().run()}
              className={editor().isActive('blockquote') ? 'is-active' : ''}
            >
              blockquote
            </button>
            <button onClick={() => editor().chain().focus().setHorizontalRule().run()}>
              horizontal rule
            </button>
            <button onClick={() => editor().chain().focus().setHardBreak().run()}>
              hard break
            </button>
            <button
              onClick={() => editor().chain().focus().undo().run()}
              disabled={
                !editor().can()
                  .chain()
                  .focus()
                  .undo()
                  .run()
              }
            >
              undo
            </button>
            <button
              onClick={() => editor().chain().focus().redo().run()}
              disabled={
                !editor().can()
                  .chain()
                  .focus()
                  .redo()
                  .run()
              }
            >
              redo
            </button>
            <button
              onClick={() => editor().chain().focus().setColor('#958DF1').run()}
              className={editor().isActive('textStyle', { color: '#958DF1' }) ? 'is-active' : ''}
            >
              purple
            </button>
            <EditorContent editor={editor()} />
            {
              editor()?.commands.setContent(editorContent())
            }
            <button onClick={() => handleIssueUpdate()}> Update issue</button>
          </Show>
        </div>
      </Show>
    </>
  );
}

export default SourceCode;

