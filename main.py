import random
numeros_validos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

def create_configure():
    numeros_validos
    #random.shuffle(numeros_validos)
    configure = [
        numeros_validos[0:4],
        numeros_validos[4:8],
        numeros_validos[8:10]
    ]
    return configure

def define_number():
    numeros_validos
    random.shuffle(numeros_validos)
    return numeros_validos[0:4]

def check_configuration(number_define, current_number):
    response = [0, 0, 0]    # [F, P, N]
    for i in range(len(number_define)):
        if number_define[i] == current_number[i]:
            response[0] = response[0] + 1
    for number in current_number:
        if number in number_define:
            response[1] = response[1] + 1
    response[1] = response[1] - response[0]
    response[2] = 4 - response[0] - response[1]
    return response

def say_confuguration(response):
    message = 'Tienes: {fijas} fija{plural_f}, {picas} pica{plural_p}'.format(
        fijas=response[0],
        plural_f = '' if response[0] == 1 else 's',
        picas=response[1],
        plural_p = '' if response[1] == 1 else 's'
    )
    return message

def intento_verbose(number_define, current_number):
    response = check_configuration(number_define, current_number)
    return say_confuguration(response)

def first_test(number_define, layers):

    current_number = layers[0]
    print(current_number, intento_verbose(number_define, current_number))

    current_number = layers[1]
    print(current_number, intento_verbose(number_define, current_number))


def main():
    print("Picas y Fijas!")
    
    layers = create_configure()
    number_define = define_number()
    
    print('layers:  ', layers)
    print('number:  ', number_define)

    first_test(number_define, layers)


if __name__ == "__main__":
    main()




print("ysanchez12")