describe("テスト認識されるかな", () => {
  test("同値比較", () => {
    const result = 4;
    // 通常の同値比較はtoBe
    expect(result).toBe(4);
  });

  test("オブジェクトの同値比較", () => {
    const result = {
      name: "Kato",
      age: 25,
    };
    // jsはオブジェクトを===で比較するとポインタの比較を行ってしまう
    // オブジェクトの各プロパティについて同値比較したいときはtoEqual
    expect(result).toEqual({ name: "Kato", age: 25 });
  });

  test.skip("モック", () => {});

  test("非同期", async () => {
    expect.assertions(4);

    const somePromise = (isSuccess: boolean) => {
      const err = new Error("error!");
      const data = "data";
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          isSuccess ? resolve(data) : reject(err);
        }, 1000);
      });
    };

    await expect(somePromise(true)).resolves.toBe("data");
    await expect(somePromise(false)).rejects.toThrow("error!");

    const resolved = await somePromise(true);
    expect(resolved).toBe("data");
    try {
      await somePromise(false);
    } catch (error) {
      expect(error.message).toBe("error!");
    }
  });
});
