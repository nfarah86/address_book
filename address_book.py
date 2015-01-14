import csv

def process_file_object(file_object):
    """ takes the csv file, parses it, adds people with info to dictionary """    
    dict_address_obj = {}
    list_people = []
   
    for lines in file_object:
        lines = lines.strip().split(',')
        dict_address_obj[lines[0], lines[1]]= [lines[3], lines[4], lines[5], lines[6]]


    print dict_address_obj


def main():
    file_address_object = open("address.csv")
    process_file_object(file_address_object)

if __name__ =="__main__":
    main()





