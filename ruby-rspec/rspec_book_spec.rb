# Red-Gree-Refactor - Closely associated wit TDD(tes driven development)

# Rspec is a Ruby gem 

# Rspec is Domain Specific Language

# Install Rspe: $ gem rspec -v 3.5.0

# require the rspec tools
require 'rspec'
#require the file that contains the code I am testing
require_relative 'rspec_book.rb'

describe 'Book' do
    it 'has to be real' do
        expect {Book.new}.to_not raise_error
    end
r
    it 'has a title' do
        my_book = Book.new
        my_book.title = 'Lord of the Rings: The Two Towers'
        # Checking data type
        expect(my_book.title).to be_a String
        # Checking specific data
        expect(my_book.title).to eq 'Lord of the Rings: The Two Towers' 
    end
end