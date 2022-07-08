# Ruby hashes => is known as a hash rocket
learn_circus = {
    acrobat: 'Mulan',
    contortionist: 'Canelo',
    clown: 'Pantera',
    }
p learn_circus

#another method of creating a hash 
# learn_band = Hash.new
# p learn_band

learn_circus.map do |key, value|
    p "lean band's #{key} is #{value}"
end


# Classes are defined in ruby with keyword
    # the scope of our class is set with an end
    # classes have two kinds of methods("verb: its what you do")
    #setter methods
    #getter methods

class Guitar

    def method_name parameter_model_name
        @model = parameter_model_name
        
    end
    def get_model
        @model
    end
end

elyses_guitar = Guitar.new
p elyses_guitar

elyses_guitar.set_model "Yamaha FG-110-1"
elyses_guitar
elyses_guitar.get_model
