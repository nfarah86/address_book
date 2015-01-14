# def solveMeSecond(a,b):
# 	return a + b
# n = int(raw_input("Enter how many times you want the program to run: "))
# for i in range(0, n):
# 	a, b = raw_input("Enter 2 values with spaces ").split()

# 	a, b = int(a), int(b)
# 	res = solveMeSecond(a, b)
# 	print res

def flipBits(int_num):
	binary_num_string_list = []
	binary_rep_num ='{0:032b}'.format(int_num)
	for i in binary_rep_num:
		if i == '0':
			binary_num_string_list.append(1)
		elif i == '1':
			binary_num_string_list.append(0)
		else:
			return ValueError 

	return binary_num_string_list


def binary_to_decimal(binary_list):
	decimal = 0
	for i in range(len(binary_list)):
		power = len(binary_list) - (i+1)
		decimal += (binary_list[i]) * (2 ** power)
	return decimal

def main():
	number= int(raw_input())
	flip_binary = flipBits(number)
	print flip_binary
	value = binary_to_decimal(flip_binary)
	print value


if __name__=='__main__':
	main()






