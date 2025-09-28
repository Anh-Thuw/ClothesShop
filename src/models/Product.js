// Example product model (without database for now)
class Product {
  constructor(id, name, description, price, category, imageUrl, inStock = true) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.category = category;
    this.imageUrl = imageUrl;
    this.inStock = inStock;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  // Static method to validate product data
  static validate(productData) {
    const errors = [];
    
    if (!productData.name || typeof productData.name !== 'string') {
      errors.push('Product name is required and must be a string');
    }
    
    if (!productData.price || isNaN(productData.price) || productData.price <= 0) {
      errors.push('Valid product price is required');
    }
    
    if (!productData.category || typeof productData.category !== 'string') {
      errors.push('Product category is required and must be a string');
    }
    
    return {
      isValid: errors.length === 0,
      errors
    };
  }

  // Method to update product
  update(updateData) {
    const allowedFields = ['name', 'description', 'price', 'category', 'imageUrl', 'inStock'];
    
    for (const field of allowedFields) {
      if (updateData[field] !== undefined) {
        this[field] = updateData[field];
      }
    }
    
    this.updatedAt = new Date();
    return this;
  }

  // Method to convert to JSON (excluding sensitive data if any)
  toJSON() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      price: this.price,
      category: this.category,
      imageUrl: this.imageUrl,
      inStock: this.inStock,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
  }
}

module.exports = Product;