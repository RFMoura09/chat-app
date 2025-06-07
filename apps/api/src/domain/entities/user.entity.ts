export class User {
  constructor(
    public readonly id: string,
    public name: string,
    public email: string,
    private passwordHash: string,
    public readonly createdAt: Date,
    public updatedAt: Date,
    public deletedAt?: Date | null,
  ) {}

  // Exemplo: método para atualizar nome
  updateName(newName: string) {
    if (!newName) {
      throw new Error('Name cannot be empty');
    }
    this.name = newName;
    this.updatedAt = new Date();
  }

  // Método para verificar senha (exemplo simples)
  verifyPassword(password: string): boolean {
    // Suponha que você tenha um hash da senha e use uma lib pra comparar
    return this.passwordHash === password; // só exemplo, nunca faça assim!
  }
}