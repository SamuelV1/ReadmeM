import { render, screen, fireEvent, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Root } from 'root'



test('Render the Tutorial File first', async () => {
    render(<Root />);
    const FirstArchive = screen.getByText(/Read?Me.md/);
    expect(FirstArchive).toBeInTheDocument();

});
test('No Pre trigger and create a archive without user command', () => {
    render(<Root />);
    expect(screen.queryByText(/^Sem título.md$/i)).toBeNull()
});

test('Have a button to create New file', async () => {
    render(<Root />);
    const CreateButton = screen.getByText(/^Adicionar arquivo$/i);
    expect(CreateButton).toBeInTheDocument();
})

test('File creating ', async () => {
    render(<Root />);
    const CreateButton = screen.getByText(/^Adicionar arquivo$/i);
    act(() => {
        userEvent.click(CreateButton)
    });
    const file = screen.getByText(/^Sem título.md$/i)
    expect(file).toBeInTheDocument()

})

test('Delete Button existence', () => {
    render(<Root />);
    // this one will be long cuz will have to create a new archive so the focus change
    const CreateButton = screen.getByText(/^Adicionar arquivo$/i);

    act(() => {
        userEvent.click(CreateButton)
    });

    const FirstArchive = screen.getByText(/Read?Me.md/);
    act(() => {
        userEvent.hover(FirstArchive)
        expect(screen.getByTitle(/Remover/i)).toBeInTheDocument()
    })


})

test('file deleting', () => {
    render(<Root />);
    // criação do arquivo
    const CreateButton = screen.getByText(/^Adicionar arquivo$/i);

    act(() => {
        userEvent.click(CreateButton)
    });

    // dando o hover pra o botão aparecer
    const FirstArchive = screen.getByText(/Read?Me.md/);
    userEvent.hover(FirstArchive)
    // apertando o botão de deletar

    const DeleteButton = screen.getByTitle(/Remover/i)
    act(() => {
        userEvent.click(DeleteButton)
    });
    expect(screen.queryByText(/Read?Me.md/)).toBeNull()

})
