import React from 'react';
import {
    List,
    Create,
    Edit,
    Datagrid,
    SimpleForm,
    EditButton,
    TextField,
    TextInput,
    NumberField,
    required,
    RichTextField,
    DateField,
    Show,
    SimpleShowLayout,
    ShowButton
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';
import {AwaitSelectInput} from "../components/AwaitSelectInput";

let toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],

    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction

    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],

    ['clean'],                                         // remove formatting button
    ['image']
];

export const WikiPageList = (props) => (
    <List {...props}>
        <Datagrid>
            <NumberField label="ID" source="id" />
            <DateField source="created_at" />
            <TextField label="Section" source="wiki_section.name" />
            <TextField source="title" />
            <ShowButton />
            <EditButton basePath="/wiki_page" />
        </Datagrid>
    </List>
);

export const WikiPageCreate = (props) => (
    <Create {...props}>
        <SimpleForm redirect="list">
            <TextInput validate={required()} source="title" />
            <TextInput validate={required()} multiline source="description" />
            <TextInput source="author" />
            <AwaitSelectInput label="Wiki Section" validate={required()} source="wiki_section_id" optionText="name" fetchRel={"wiki_section"} />
            <RichTextInput validate={required()} source="content" toolbar={toolbarOptions} />
        </SimpleForm>
    </Create>
);

export const WikiPageEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput validate={required()} source="title" />
            <TextInput validate={required()} multiline source="description" />
            <TextInput source="author" />
            <AwaitSelectInput label="Wiki Section" validate={required()} source="wiki_section_id" optionText="name" fetchRel={"wiki_section"} />
            <RichTextInput validate={required()} source="content" toolbar={toolbarOptions} />
        </SimpleForm>
    </Edit>
);

export const WikiPageShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <NumberField label="ID" source="id" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <TextField source="title" />
            <TextField source="description" />
            <TextField source="author" />
            <RichTextField source="content" />
        </SimpleShowLayout>
    </Show>
);
