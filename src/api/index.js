export class Api {
  /**
   * 获取公司数据
   */
  static async getCompanies() {
    const res = await fetch('companies.txt');
    const text = await res.text();
    const lines = text.split('\n').filter(v => !!v.trim()).map(v_1 => {
      const [title, address] = v_1.trim().replace(/ +/, ' ').split(' ');
      return { title, address };
    });
    return lines;
  }
}