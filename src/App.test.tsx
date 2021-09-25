import { render, screen, fireEvent, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Root } from 'root'

test('Render the Tutorial File first', async () => {
    render(<Root />);
    const FirstArchive = await screen.getByText(/Read?Me.md/);
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

test('File Creation', async () => {
    render(<Root />);
    const CreateButton = screen.getByText(/^Adicionar arquivo$/i);
    act(() => {
        userEvent.click(CreateButton)
    });
    expect(screen.getByText(/^Sem título.md$/i)).toBeInTheDocument()
})

// missing delete file :(
